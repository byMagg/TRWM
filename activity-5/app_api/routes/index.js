const express = require('express');
const router = express.Router();
const ctrlCriminals = require('../controllers/criminals');

// Criminals
router.get('/criminals', ctrlCriminals.criminalsReadAll);
router.get('/criminals/:criminalid', ctrlCriminals.criminalsReadOne);


module.exports = router;
