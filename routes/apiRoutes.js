const notes = require(`../db/db.json`);
const router = require(`express`).Router();
const fs = require(`fs`);

router.get(`/notes`, (req, res) => {
    /* 
    using notes run a function that will READ all the notes and then respond back with the notes it finds to put them on the page.
    */

    const notes = JSON.parse(fs.readFileSync(`./db/db.json`, "utf-8"));
   // console.log(notes)
    res.json(notes);
    
    
});

router.post("/notes", (req, res) => {

    // using notes run a function that will create a new note either using a spread operator or using an object created from the data receieved from the front end. 
    //HINT console log the request.body to create the object or use the spread operator. 
    const note = req.body;
    const notes = JSON.parse(fs.readFileSync(`./db/db.json`, "utf-8"));
    notes.push(note)
    console.log(notes)
    res.json(notes);
   
});


router.delete("/notes/:id", (req, res) => {

})




module.exports = router;