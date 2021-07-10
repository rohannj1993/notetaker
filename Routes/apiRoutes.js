const notes = require (`.json`);
const { createNewNote} = require(`../lib/notes`);
const router = require(`express`).Router();
const fs = require(`fs`);

router.get(`/notes`,(req,res) => {
    const note = JSON.parse(fs.readFileSync(`./db/db.json`),"utf-8");
res.json(notesData);
console.log(notesData);
});

router.post("/api/notes",(req,res) =>{
    const note = createNewNote(req.body,notes);
    res.json(note);
    console.log(note);
});

module.exports = router;