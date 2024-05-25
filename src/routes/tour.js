const Tour = require('../controllers/tour');
const cache = require('../cache');

module.exports = function(app) {
    app.route('/tours').get(async (req, res, next) => {
        try {
            return res.json(await Tour.getAllTours());
        } catch (err) {
            return next(err);
        }
    });

    app.route('/tour/matches').get(async (req, res, next) => {
        try {
            let params = req.query;
            const cacheKey = `tour_matches_${params.name}`;
            
            const cachedResult = cache.get(cacheKey);
            if (cachedResult) {
                return res.json(cachedResult);
            }
            
            let result = await Tour.getMatchesByTourName(params);
            cache.set(cacheKey, result); 
            
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
}