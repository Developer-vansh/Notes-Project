import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import Notes  from "../models/note.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const fetchallnotes = asyncHandler(async (req, res) => {
    try {
      const notes = await Notes.findAll({
        where: {
          userId: req.user.id
        }
      });
      res.json(notes);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });


  const addnote = asyncHandler(async (req, res) => {
    try { 
      console.log(req.user.id);
      const { title, description, tag } = req.body;
      const note = await Notes.create({
        title,
        description,
        tag,
        userId: req.user.id,
      });
      
      res.json(note);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

  
  const updatenote = asyncHandler(async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const updatedNote = {};
      
      if (title) updatedNote.title = title;
      if (description) updatedNote.description = description;
      if (tag) updatedNote.tag = tag;
      
      const note = await Notes.findByPk(req.params.id);
      if (!note) {
        return res.status(404).send("Not Found");
      }
      
      if (note.userId !== req.user.id) {
        return res.status(401).send("Not Allowed");
      }
      
      await note.update(updatedNote);
      res.json(note);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

  const deletenote = asyncHandler(async (req, res) => {
    try {
      const note = await Notes.findByPk(req.params.id);
      if (!note) {
        return res.status(404).send("Not Found");
      }
      
      if (note.userId !== req.user.id) {
        return res.status(401).send("Not Allowed");
      }
      
      await note.destroy();
      res.json({ "Success": "Note has been deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

  export {fetchallnotes, addnote, updatenote, deletenote};