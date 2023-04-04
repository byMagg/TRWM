const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');

const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

/* GET api/locations */
const restaurantsReadAll = (req, res) => {
    Restaurant
        .find({})
        .exec((err, restaurants) => {
            if (!restaurants) {
                sendJSONresponse(res, 404, { "message": "restaurants not found" });
            } else if (err) { sendJSONresponse(res, 404, err); }
            else {
                sendJSONresponse(res, 200, restaurants);
            }
        });
};

/* GET api/locations/locationid */
const restaurantsReadOne = (req, res) => {
    Restaurant
        .findById(req.params.restaurantid)
        .exec((err, restaurant) => {
            if (!restaurant) {
                return sendJSONresponse(res, 404, { "message": "restaurant not found" });
            } else if (err) {
                return sendJSONresponse(res, 404, err);
            }
            sendJSONresponse(res, 200, restaurant);
        });
};



module.exports = {
    restaurantsReadAll,
    restaurantsReadOne,
};