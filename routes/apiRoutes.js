const fs = require('fs');
const db = require('../db/db.json');
const uniqueID = require('uniqid');
const JSON = require('express');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.json(db);
    })

    app.post('/api/notes'), (req, res) => {
        const newNote = {
            id: uniqueid(),
            title: req.body.title,
            text: req.body.text
        };

        console.log (newNote);
        
        db.push(newNote);
        fs.readFile(path.join ('../db/db.json'), JSON.stringify(db), (err, data) => {
            if (err) throw err;
            res.json(db);
        });
    };
};
