require('dotenv').config()
const cors = require("cors")
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const connectToDb = require('./config/connectToDb')
connectToDb()
const notesController = require('./controllers/notesController')

app.use(express.json())
//---- [Routes  => (HTTP) GET POST PUT PATCH DELETE]

app.use(cors({
    origin : true,
    credentials:true
}))

app.get('/notes',notesController.fetchNotes)
// -->Retrive all notes in DB

app.get('/notes/:id',notesController.fetchNote)
// -->Retrive all notes in DB

app.post('/notes',notesController.createNote)
// -->Retrive all notes in DB

app.put('/notes/:id',notesController.updateNote)
// -->Retrive all notes in DB

app.delete('/notes/:id',notesController.deleteNote)
// -->Retrive all notes in DB



app.listen(PORT,() => {
 console.log('ServerConnected : ${PORT}')
})