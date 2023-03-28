const mongoose = require('mongoose');
const Cri = mongoose.model('Criminal');

const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

/* GET api/locations */
const criminalsReadAll = (req, res) => {
    Cri
        .find({})
        .exec((err, criminals) => {
            if (!criminals) {
                sendJSONresponse(res, 404, { "message": "criminals not found" });
            } else if (err) { sendJSONresponse(res, 404, err); }
            else {
                console.log(criminals)
                sendJSONresponse(res, 200, criminals);
            }
        });
};

/* GET api/locations/locationid */
const criminalsReadOne = (req, res) => {
    Cri
        .findById(req.params.criminalid)
        .exec((err, criminal) => {
            if (!criminal) {
                return sendJSONresponse(res, 404, { "message": "criminal not found" });
            } else if (err) {
                return sendJSONresponse(res, 404, err);
            }
            sendJSONresponse(res, 200, criminal);
        });
};

module.exports = {
    criminalsReadAll,
    criminalsReadOne,
};