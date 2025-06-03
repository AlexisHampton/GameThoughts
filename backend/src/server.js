import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import gamesRoutes from "./routes/gamesRoutes.js"
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();


app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173"
    })
);

app.use("/api/games", gamesRoutes);

connectDB().then(() =>
    app.listen(5001, (req, res) => {
        console.log("Server started on port:", 5001);
    })
); 