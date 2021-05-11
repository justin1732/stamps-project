var express = require("express");
const address = require('../../AddressController');
var router = express.Router();

router.route("/").get(address.findAssets);

module.exports = router;