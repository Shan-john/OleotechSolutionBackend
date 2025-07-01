// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { gethomepagedata, sethomepagedata,   } = require("../controller/HomepageController");
const {getservice,updateservice} = require("../controller/ServicepageControler");

router.route("/homepage").get(gethomepagedata).post(sethomepagedata);
 
 
router.route('/servicepage').get(getservice).post(updateservice)

module.exports = router;
