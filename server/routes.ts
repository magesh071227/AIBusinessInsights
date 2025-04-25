import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { registrationSchema, enrollmentSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import pool from "./db";

export async function registerRoutes(app: Express): Promise<Server> {
  // Registration endpoint
  app.post("/api/register", async (req, res) => {
    try {
      // Validate incoming data
      const validatedData = registrationSchema.parse(req.body);
      
      // Store registration in memory
      const registration = await storage.createRegistration({
        ...validatedData,
        createdAt: new Date().toISOString(),
      });
      
      res.status(201).json({
        message: "Registration successful",
        data: registration,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: "Validation error",
          errors: error.errors,
        });
      } else {
        console.error("Registration error:", error);
        res.status(500).json({
          message: "Internal server error",
        });
      }
    }
  });

  // Get registrations endpoint (admin access would be implemented in a real app)
  app.get("/api/registrations", async (req, res) => {
    try {
      const registrations = await storage.getAllRegistrations();
      res.status(200).json(registrations);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  });

  // Enrollment endpoint
  app.post("/api/enroll", async (req, res) => {
    try {
      const validatedData = enrollmentSchema.parse(req.body);
      
      // Insert into MySQL database
      const [result] = await pool.execute(
        'INSERT INTO enrollments (name, email, phone, organization, job_title, course_title, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [
          validatedData.name,
          validatedData.email,
          validatedData.phone,
          validatedData.organization,
          validatedData.jobTitle,
          validatedData.courseTitle,
          new Date().toISOString()
        ]
      );
      
      console.log('Enrollment saved:', result);
      
      res.status(201).json({
        message: "Enrollment successful",
        data: { id: result.insertId, ...validatedData }
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: "Validation error",
          errors: error.errors,
        });
      } else {
        console.error("Enrollment error:", error);
        res.status(500).json({
          message: "Internal server error",
          details: error.message
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
