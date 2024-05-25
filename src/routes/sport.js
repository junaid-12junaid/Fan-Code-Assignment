const Sport = require('../controllers/sport');

module.exports = function(app) {
    app.route('/sport/tour/match').get(async (req, res, next) => {
        try {
            return res.json(await Sport.getAllSportsToursAndMatches());
        } catch (err) {
            console.log(err)
            return next(err);
        }
    });
}