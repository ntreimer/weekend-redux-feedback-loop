const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log(req.body);
    // SQL query for inserting feeback
    const queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryString, [req.body.feelings, req.body.understanding, req.body.support, req.body.comments]).then((response)=>{
        console.log(response);
        // if successfully added, send ok status
        res.sendStatus(201);
    }).catch((err) => {
        console.log(err);
        // if failed to send, send server error
        res.sendStatus(500);
    })
})

module.exports = router;