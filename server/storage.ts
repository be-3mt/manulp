import { type BlogPost, type InsertBlogPost, type Contact, type InsertContact, type Project, type ProjectMilestone } from "@shared/schema";

export interface IStorage {
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
  getProjects(userId?: number): Promise<(Project & { milestones: ProjectMilestone[] })[]>;
}

export class MemStorage implements IStorage {
  private blogs: Map<number, BlogPost>;
  private contacts: Map<number, Contact>;
  private projects: Map<number, Project>;
  private milestones: Map<number, ProjectMilestone>;
  private currentBlogId: number;
  private currentContactId: number;
  private currentProjectId: number;
  private currentMilestoneId: number;

  constructor() {
    this.blogs = new Map();
    this.contacts = new Map();
    this.projects = new Map();
    this.milestones = new Map();
    this.currentBlogId = 1;
    this.currentContactId = 1;
    this.currentProjectId = 1;
    this.currentMilestoneId = 1;

    // Seed initial blog posts and sample projects
    this.seedBlogPosts();
    this.seedProjects();
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

  private seedProjects() {
    const sampleProjects: Project[] = [
      {
        id: this.currentProjectId++,
        userId: 1,
        name: "生成AI導入プロジェクト",
        description: "製造プロセスの最適化のための生成AI導入",
        status: "in_progress",
        startDate: new Date("2024-01-15"),
        targetDate: new Date("2024-06-30"),
        createdAt: new Date(),
      },
      {
        id: this.currentProjectId++,
        userId: 1,
        name: "予知保全システム構築",
        description: "設備の予知保全システムの導入",
        status: "planning",
        startDate: new Date("2024-02-01"),
        targetDate: new Date("2024-08-31"),
        createdAt: new Date(),
      },
    ];

    const sampleMilestones: ProjectMilestone[] = [
      {
        id: this.currentMilestoneId++,
        projectId: 1,
        title: "要件定義",
        description: "現状分析と要件の洗い出し",
        completed: true,
        dueDate: new Date("2024-02-15"),
        createdAt: new Date(),
      },
      {
        id: this.currentMilestoneId++,
        projectId: 1,
        title: "システム設計",
        description: "AI モデルの選定と設計",
        completed: false,
        dueDate: new Date("2024-03-31"),
        createdAt: new Date(),
      },
      {
        id: this.currentMilestoneId++,
        projectId: 2,
        title: "センサー配置計画",
        description: "センサーの種類と設置場所の決定",
        completed: false,
        dueDate: new Date("2024-03-15"),
        createdAt: new Date(),
      },
    ];

    sampleProjects.forEach(project => this.projects.set(project.id, project));
    sampleMilestones.forEach(milestone => this.milestones.set(milestone.id, milestone));
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

  async getProjects(userId?: number): Promise<(Project & { milestones: ProjectMilestone[] })[]> {
    const projects = Array.from(this.projects.values());
    const filteredProjects = userId ? projects.filter(p => p.userId === userId) : projects;

    return filteredProjects.map(project => ({
      ...project,
      milestones: Array.from(this.milestones.values()).filter(m => m.projectId === project.id),
    }));
  }
}

export const storage = new MemStorage();