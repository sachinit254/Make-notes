const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const app = express();
connectDB();
app.use(express.json());

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

// routes
app.use("/api/users", userRoutes);

// error handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));
