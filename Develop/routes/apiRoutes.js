const path = require("path")
const router = require("express").router();

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, ""));
})

router.post("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, ""));
})

module.exports = router;