import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import gamesRoutes from "./routes/gamesRoutes.js"
import { connectDB } from "./config/db.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
    app.use(
        cors({
            origin: "http://localhost:5173"
        })
    );
}

app.use(express.json());



app.use("/api/games", gamesRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

connectDB().then(() =>
    app.listen(PORT, (req, res) => {
        console.log("Server started on port:", PORT);
    })
); 