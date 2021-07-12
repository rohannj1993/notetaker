const notes = require (`../db/db.json`);
const { createNewNote} = require(`..`);
const router = require(`express`).Router();
const fs = require(`fs`);

router.get(`/notes`,(req,res) => {
/* 
using notes run a function that will READ all the notes and then respond back with the notes it finds to put them on the page.
*/
    
    const note = JSON.parse(fs.readFileSync(`./db/db.json`),"utf-8");
res.json(notesData);
console.log(notesData);
});

router.post("/notes",(req,res) =>{

    // using notes run a function that will create a new note either using a spread operator or using an object created from the data receieved from the front end. 
    //HINT console log the request.body to create the object or use the spread operator. 
    const note = createNewNote(req.body,notes);
    res.json(note);
    console.log(note);
});


router.delete("/notes/:id",(req,res) =>{
    
})




module.exports = router;