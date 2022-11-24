const express = require('express');
const router = express.Router();

router.post("/login", (req, res) => {

    console.log(req.email , req.password);

    return res.status(200).json({
        success: true
    });
});

module.exports = router;