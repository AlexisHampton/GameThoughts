import Game from "../models/Game.js"

export async function getAllGames(req, res) {
    const games = await Game.find().sort({ createdAt: -1 });
    res.status(200).json(games);
}

export async function getSpecificGame(req, res) {
    try {
        const game = await Game.findById(req.params.id);
        if (!game) return res.status(404).json({ message: "Game does not exist" });
        res.status(200).json(game);
    } catch (error) {
        console.log("Cannot retrieve specific game", error);
        res.status(500).send("Internal server error");
    }
}

export async function createNewPost(req, res) {
    try {
        const { title, content, wouldRecommend } = req.body;
        const newGame = new Game({ title, content, wouldRecommend });

        const savedNote = await newGame.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.log("Cannot post game", error);
        res.status(500).send("Internal server error");
    }
}

export async function updateNewPost(req, res) {
    try {
        const { title, content, wouldRecommend } = req.body;
        const game = await Game.findByIdAndUpdate(req.params.id, { title, content, wouldRecommend }, { new: true });

        if (!game) return res.status(404).json({ message: "Game does not exist" });
        res.status(200).json(game);
    } catch (error) {
        console.log("Cannot post game", error);
        res.status(500).send("Internal server error");
    }
}

export async function deletePost(req, res) {
    try {
        const deletedGame = await Game.findByIdAndDelete(req.params.id);
        if (!deletedGame) return res.status(404).json({ message: "Cannot find note" });
        res.status(200).json({ message: "deleted post" });

    } catch (error) {
        console.log("Cannot post game", error);
        res.status(500).send("Internal server error");
    }
}