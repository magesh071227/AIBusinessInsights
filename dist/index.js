// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  registrations;
  enrollments;
  currentUserId;
  currentRegistrationId;
  currentEnrollmentId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.registrations = /* @__PURE__ */ new Map();
    this.enrollments = /* @__PURE__ */ new Map();
    this.currentUserId = 1;
    this.currentRegistrationId = 1;
    this.currentEnrollmentId = 1;
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async createRegistration(registrationData) {
    const id = this.currentRegistrationId++;
    const registration = { ...registrationData, id };
    this.registrations.set(id, registration);
    return registration;
  }
  async getAllRegistrations() {
    return Array.from(this.registrations.values());
  }
  async createEnrollment(enrollmentData) {
    const id = this.currentEnrollmentId++;
    const enrollment = { ...enrollmentData, id };
    this.enrollments.set(id, enrollment);
    return enrollment;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  organization: text("organization").notNull(),
  jobTitle: text("job_title").notNull(),
  createdAt: text("created_at").notNull()
});
var registrationSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  organization: z.string().min(2, "Company/Organization name is required"),
  jobTitle: z.string().min(2, "Job title is required")
});
var insertRegistrationSchema = createInsertSchema(registrations).pick({
  name: true,
  email: true,
  phone: true,
  organization: true,
  jobTitle: true
});
var enrollments = pgTable("enrollments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  organization: text("organization").notNull(),
  jobTitle: text("job_title").notNull(),
  courseTitle: text("course_title").notNull(),
  createdAt: text("created_at").notNull()
});
var enrollmentSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  organization: z.string().min(2, "Company/Organization name is required"),
  jobTitle: z.string().min(2, "Job title is required"),
  courseTitle: z.string().min(2, "Course title is required")
});

// server/routes.ts
import { ZodError } from "zod";

// server/db.ts
import mysql from "mysql2/promise";
var pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
var createTable = async () => {
  try {
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS enrollments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        organization VARCHAR(255),
        job_title VARCHAR(255),
        course_title VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Enrollments table created/verified successfully");
  } catch (error) {
    console.error("Error creating enrollments table:", error);
  }
};
createTable();
var db_default = pool;

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/register", async (req, res) => {
    try {
      const validatedData = registrationSchema.parse(req.body);
      const registration = await storage.createRegistration({
        ...validatedData,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      });
      res.status(201).json({
        message: "Registration successful",
        data: registration
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error("Registration error:", error);
        res.status(500).json({
          message: "Internal server error"
        });
      }
    }
  });
  app2.get("/api/registrations", async (req, res) => {
    try {
      const registrations2 = await storage.getAllRegistrations();
      res.status(200).json(registrations2);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      res.status(500).json({
        message: "Internal server error"
      });
    }
  });
  app2.post("/api/enroll", async (req, res) => {
    try {
      const validatedData = enrollmentSchema.parse(req.body);
      const [result] = await db_default.execute(
        "INSERT INTO enrollments (name, email, phone, organization, job_title, course_title, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          validatedData.name,
          validatedData.email,
          validatedData.phone,
          validatedData.organization,
          validatedData.jobTitle,
          validatedData.courseTitle,
          (/* @__PURE__ */ new Date()).toISOString()
        ]
      );
      console.log("Enrollment saved:", result);
      res.status(201).json({
        message: "Enrollment successful",
        data: { id: result.insertId, ...validatedData }
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: "Validation error",
          errors: error.errors
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
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(process.cwd(), "dist/public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
