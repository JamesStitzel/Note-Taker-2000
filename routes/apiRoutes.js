const fs = require("fs")

app.get("/api/notes", function(req, res) {
    res.json(notes);
});

app.post("/api/notes", function(req, res) {
    let newNote = req.body;
    notes.push(newNote);
    updateDb();
    return console.log("Added new note: "+newNote.title);
});

app.get("/api/notes/:id", function(req,res) {
    res.json(notes[req.params.id]);
});

app.delete("/api/notes/:id", function(req, res) {
    notes.splice(req.params.id, 1);
    updateDb();
    console.log("Deleted note with id "+req.params.id);
});

function updateDb() {
    fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
        if (err) throw err;
        return true;
    });
}

module.exports = router;