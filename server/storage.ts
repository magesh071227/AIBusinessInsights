import { users, type User, type InsertUser } from "@shared/schema";
import { type Registration } from "@shared/schema";

export interface IStorage {
  createEnrollment(enrollment: Omit<Enrollment, "id">): Promise<Enrollment>;
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createRegistration(registration: Omit<Registration, "id">): Promise<Registration>;
  getAllRegistrations(): Promise<Registration[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private registrations: Map<number, Registration>;
  private enrollments: Map<number, Enrollment>;
  private currentUserId: number;
  private currentRegistrationId: number;
  private currentEnrollmentId: number;

  constructor() {
    this.users = new Map();
    this.registrations = new Map();
    this.enrollments = new Map();
    this.currentUserId = 1;
    this.currentRegistrationId = 1;
    this.currentEnrollmentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createRegistration(registrationData: Omit<Registration, "id">): Promise<Registration> {
    const id = this.currentRegistrationId++;
    const registration: Registration = { ...registrationData, id };
    this.registrations.set(id, registration);
    return registration;
  }

  async getAllRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values());
  }

  async createEnrollment(enrollmentData: Omit<Enrollment, "id">): Promise<Enrollment> {
    const id = this.currentEnrollmentId++;
    const enrollment: Enrollment = { ...enrollmentData, id };
    this.enrollments.set(id, enrollment);
    return enrollment;
  }
}

export const storage = new MemStorage();