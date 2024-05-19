import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { addnote, deletenote, fetchallnotes, updatenote } from "../controllers/note.controller.js";
const router = Router();

// route- http://localhost:8002/api/v1/note/fetchallnotes
router.route("/fetchallnotes").get(verifyJWT, fetchallnotes);

// route- http://localhost:8002/api/v1/note/addnote
router.route("/addnote").post(verifyJWT, addnote);

// route- http://localhost:8002/api/v1/note/updatenote/:id
router.route("/updatenote/:id").put(verifyJWT, updatenote);

// route- http://localhost:8002/api/v1/note/deletenote/:id
router.route("/deletenote/:id").delete(verifyJWT, deletenote);
export default router;
