const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

/* GET users listing. */
router.post('/', [
        check('name', 'Name is missing')
            .not()
            .isEmpty(),
        check('email', 'Include real email').isEmail(),
        check('password', 'Please enter a valid password')
            .isLength({ min: 6 })
    ], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors:
                    errors
                        .array()
                        .map(e => e.msg)
            })
        }
        res.send('respond with a resource')
    }
);

module.exports = router;
