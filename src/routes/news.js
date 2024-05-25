
const mysql = require('../lib/mysql');

app.post('/news', (req, res) => {
    const { title, description, matchId, tourId, sportId } = req.body;
    const query = `INSERT INTO news (title, description, matchId, tourId, sportId) VALUES (?, ?, ?, ?, ?)`;
    mysql.query(query, [title, description, matchId, tourId, sportId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId });
    });
});

app.get('/news/match/:id', (req, res) => {
    const matchId = req.params.id;
    const query = `SELECT * FROM news WHERE matchId = ?`;
    mysql.query(query, [matchId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
});

app.get('/news/tour/:id', (req, res) => {
    const tourId = req.params.id;
    const query = `SELECT * FROM news WHERE tourId = ?`;
    mysql.query(query, [tourId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
});

app.get('/news/sport/:id', (req, res) => {
    const sportId = req.params.id;
    const query = `SELECT * FROM news WHERE sportId = ?`;
    mysql.query(query, [sportId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
});



