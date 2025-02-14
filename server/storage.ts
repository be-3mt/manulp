import { db } from "./db";
import { eq } from "drizzle-orm";
import { 
  type BlogPost, type InsertBlogPost, 
  type Contact, type InsertContact, 
  type Project, type ProjectMilestone,
  type ChatUser, type InsertChatUser, 
  type ChatSession, type InsertChatSession, 
  type ChatMessage, type InsertChatMessage,
  chatUsers, chatSessions, chatMessages, blogPosts, contacts, projects
} from "@shared/schema";

export interface IStorage {
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
  getProjects(userId?: number): Promise<(Project & { milestones: ProjectMilestone[] })[]>;
  createChatUser(user: InsertChatUser): Promise<ChatUser>;
  getChatUserByEmail(email: string): Promise<ChatUser | undefined>;
  createChatSession(session: InsertChatSession): Promise<ChatSession>;
  getChatSessionById(sessionId: number): Promise<ChatSession | undefined>;
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatMessagesBySessionId(sessionId: number): Promise<ChatMessage[]>;
}

export class DatabaseStorage implements IStorage {
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return db.query.blogPosts.findMany();
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const [newContact] = await db.insert(contacts).values(contact).returning();
    return newContact;
  }

  async getProjects(userId?: number): Promise<(Project & { milestones: ProjectMilestone[] })[]> {
    const projects = await db.query.projects.findMany({
      where: userId ? eq(projects.userId, userId) : undefined,
      with: {
        milestones: true,
      },
    });
    return projects;
  }

  async createChatUser(user: InsertChatUser): Promise<ChatUser> {
    const [newUser] = await db.insert(chatUsers).values(user).returning();
    return newUser;
  }

  async getChatUserByEmail(email: string): Promise<ChatUser | undefined> {
    const [user] = await db.select().from(chatUsers).where(eq(chatUsers.email, email));
    return user;
  }

  async createChatSession(session: InsertChatSession): Promise<ChatSession> {
    const [newSession] = await db.insert(chatSessions).values(session).returning();
    return newSession;
  }

  async getChatSessionById(sessionId: number): Promise<ChatSession | undefined> {
    const [session] = await db.select().from(chatSessions).where(eq(chatSessions.id, sessionId));
    return session;
  }

  async createChatMessage(message: InsertChatMessage): Promise<ChatMessage> {
    const [newMessage] = await db.insert(chatMessages).values(message).returning();
    return newMessage;
  }

  async getChatMessagesBySessionId(sessionId: number): Promise<ChatMessage[]> {
    return db
      .select()
      .from(chatMessages)
      .where(eq(chatMessages.sessionId, sessionId))
      .orderBy(chatMessages.createdAt);
  }
}

export const storage = new DatabaseStorage();