const express = require('express');
const router = express.Router();

// GET 
router.get("/:id", (req, res) => {
    res.send("User Construction User Profile");
});


// POST


module.exports = router;