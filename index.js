require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const { authenticate } = require("./middleware/authMiddleware");

const port = process.env.PORT;
const mongoDB_url = process.env.MONGO_URI;
const app = express();

mongoose.connect(mongoDB_url).then(()=> console.log("MongoDB connected..."));


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", authenticate, userRoutes);

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
