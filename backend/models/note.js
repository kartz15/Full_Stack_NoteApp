//Establish Data Structure (Schema) for a Particular Model

const mongoose = require ('mongoose')
const noteSchema = new mongoose.Schema({
    title: String,
    body : String
})


//This is where Schema and Properties are created.

const Note = mongoose.model("Note",noteSchema)

module.exports = Note