// routes/userRoutes.js
const express = require("express");

const router = express.Router();
const { gethomepagedata, sethomepagedata,   } = require("../controller/HomepageController");
const {getservice,updateservice} = require("../controller/ServicepageControler");
// ✅ Import multer middleware
const upload = require("../middlewares/multerConfig"); // Adjust path as needed

router.route("/homepage").get(gethomepagedata).post(upload.array('projectimages', 4), sethomepagedata);


 
router.route('/servicepage').get(getservice).post(updateservice)

module.exports = router;
