import express from "express";
import { createNewPost, deletePost, getAllGames, getSpecificGame, updateNewPost } from "../controllers/gamesController.js";


const router = express.Router();

router.get("/", getAllGames); //get
router.get("/:id", getSpecificGame) //get specific

router.post("/", createNewPost) //post new game

router.put("/:id", updateNewPost);//update game
router.delete("/:id", deletePost)//delete game

export default router;