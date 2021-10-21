const path = require("path")
const router = require("express").router();

app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get('/notes', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

function updateDb() {
    fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
        if (err) throw err;
        return true;
    });
}

module.exports = router;