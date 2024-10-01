//controller controlling? - Functionality of Data based on HTTP methods and REST routes
const Note = require('../models/note')

//CRUD --> find() findByIdAndUpdate() findByIdAndDelete()

const fetchNotes = async(req,res) => {
   const notes = await Note.find();
   res.json({notes: notes})
};
//--------------------------[READ]
const fetchNote = async(req,res) => {
   const noteId = req.params.id;
    const note = await Note.findById(noteId);
    res.json({note : note});
};
//--------------------------[READ : id]
const createNote = async(req,res) => {
   const {title,body}=req.body;
   const note  =await  Note.create({
   title:title,
   body:body
})
res.json({note:note})
};
// ------------------------[CREATE]
const updateNote = async(req,res) => {
 const noteId = req.params.id;
 const {title,body}= req.body;
 const note = await Note.findByIdAndUpdate(noteId,{
    title:title,
    body:body
 })
 const updatedNote = Note.findById(noteId);
 res.json({ note:note });
};
// ------------------------[UPDATE]
const deleteNote = async(req,res) => {
    const noteId = req.params.id;
    await Note.deleteOne({
        _id: noteId
    })
    res.json({sucess:"Record is deleted" })
};
// ------------------------[DELETE]

module.exports = {createNote,updateNote,fetchNote,fetchNotes,deleteNote}


// const Note = require('../models/note');

// // CRUD --> find(), findByIdAndUpdate(), findByIdAndDelete()

// // --------------------------[READ: All]
// const fetchNotes = async (req, res) => {
//     try {
//         const notes = await Note.find();
//         res.json({ notes });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch notes' });
//     }
// };

// // --------------------------[READ: By ID]
// const fetchNote = async (req, res) => {
//     const noteId = req.params.id;
//     try {
//         const note = await Note.findById(noteId);
//         if (!note) {
//             return res.status(404).json({ error: 'Note not found' });
//         }
//         res.json({ note });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch note' });
//     }
// };

// // --------------------------[CREATE]
// const createNote = async (req, res) => {
//     const { title, body } = req.body;
//     try {
//         const note = await Note.create({ title, body });
//         res.status(201).json({ note });
//     } catch (error) {
//         res.status(400).json({ error: 'Failed to create note' });
//     }
// };

// // --------------------------[UPDATE]
// const updateNote = async (req, res) => {
//     const noteId = req.params.id;
//     const { title, body } = req.body;
//     try {
//         const note = await Note.findByIdAndUpdate(noteId, { title, body }, { new: true, runValidators: true });
//         if (!note) {
//             return res.status(404).json({ error: 'Note not found' });
//         }
//         res.json({ note });
//     } catch (error) {
//         res.status(400).json({ error: 'Failed to update note' });
//     }
// };

// // --------------------------[DELETE]
// const deleteNote = async (req, res) => {
//     const noteId = req.params.id;
//     try {
//         const result = await Note.findByIdAndDelete(noteId);
//         if (!result) {
//             return res.status(404).json({ error: 'Note not found' });
//         }
//         res.json({ success: 'Record is deleted' });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to delete note' });
//     }
// };

// module.exports = { createNote, updateNote, fetchNote, fetchNotes, deleteNote };
