import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/taskRoutes.js";
import config from "./config.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Database connection
mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) =>
  console.error(`MongoDB connection error: ${err}`)
);
mongoose.connection.on("connected", () =>
  console.log(`MongoDB connected to ${process.env.MONGODB_URI}`)
);

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", routes);

// Server listening
app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);
