import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use('*',cors(corsOptions));

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set CORS headers for all routes
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

// Mount reservationRouter
app.use("/api/v1/reservation", reservationRouter);

app.get("/", (req, res) => {
  console.log("Received request for /");
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  });
});

dbConnection();

app.use(errorMiddleware);

export default app;
