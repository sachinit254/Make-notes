const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const app = express();
connectDB();
app.use(express.json());

// routes
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

// error handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));
