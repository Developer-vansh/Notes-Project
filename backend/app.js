import express from "express";
import cors from "cors";

// Routes
import userRoutes from "./routes/user.routes.js";
import noteRoutes from "./routes/note.routes.js";

const app = express();

// for body parser
app.use(express.json());

//for url params
app.use(express.urlencoded({ extended: true }));

//Server Working
app.get("/", (_, res) => {
  res.send("Welcome To Vikas Panchal Server");
});

app.use(cors());

//Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/note", noteRoutes);

export default app;
