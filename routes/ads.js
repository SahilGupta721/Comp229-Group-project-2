var express = require('express');
var router = express.Router();

let adsController = require('../controllers/ads');
let authController = require('../controllers/auth');

router.get('/', adsController.list);
router.post('/create', authController.requireSignin, adsController.createAd);
router.get('/get/:adId', adsController.getAd, adsController.sendById);
router.put('/edit/:adId', authController.requireSignin, adsController.update);
router.delete('/delete/:adId', authController.requireSignin, adsController.remove);

module.exports = router;

