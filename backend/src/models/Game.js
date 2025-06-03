import mongoose, { mongo } from "mongoose";

const gameSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        wouldRecommend: {
            type: Boolean
        }
    },
    { timestamps: true } //createdAt, updatedAt
);

const Game = mongoose.model("Game", gameSchema);

export default Game;