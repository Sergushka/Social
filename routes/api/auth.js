const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) =>
    res.send('Auth ' + req)
);

module.exports = router;
