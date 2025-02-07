import { type BlogPost, type InsertBlogPost, type Contact, type InsertContact } from "@shared/schema";

export interface IStorage {
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private blogs: Map<number, BlogPost>;
  private contacts: Map<number, Contact>;
  private currentBlogId: number;
  private currentContactId: number;

  constructor() {
    this.blogs = new Map();
    this.contacts = new Map();
    this.currentBlogId = 1;
    this.currentContactId = 1;

    // Seed initial blog posts
    this.seedBlogPosts();
  }

  private seedBlogPosts() {
    const posts: InsertBlogPost[] = [
      {
        title: "How AI is Transforming Manufacturing",
        content: "AI is revolutionizing manufacturing processes...",
        summary: "Discover how artificial intelligence is changing the manufacturing landscape",
        slug: "ai-transforming-manufacturing",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801",
      },
      {
        title: "Predictive Maintenance Success Stories",
        content: "Learn how predictive maintenance is saving costs...",
        summary: "Real-world examples of predictive maintenance in action",
        slug: "predictive-maintenance-success",
        imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
      }
    ];

    posts.forEach(post => {
      this.blogs.set(this.currentBlogId, {
        ...post,
        id: this.currentBlogId++
      });
    });
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogs.values());
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogs.values()).find(post => post.slug === slug);
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const newContact: Contact = {
      ...contact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, newContact);
    return newContact;
  }
}

export const storage = new MemStorage();
