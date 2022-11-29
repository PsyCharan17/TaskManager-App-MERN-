const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
dotenv.config();
connectDB();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => {
    return n._id === req.params.id;
  });
  res.send(note);
});

app.use("/api/users", userRoutes);

// ---------Deployment--------------

__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

// ---------Deployment--------------

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
