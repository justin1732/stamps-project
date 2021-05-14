const config = require("./config");
const fetch = require("node-fetch");
const express = require("express");
const router = express.Router();


require("dotenv").config();

// Render the main app HTML.
router.get("/", (req, res) => {
    res.render("index.html");
  });

  router.post("/verify-addresses", async (req, res) => {
    try {
  
      const options = {
        "method": "POST",
        "headers": {
          "Host": "api.shipengine.com",
          "API-Key": config.shipengine.apiKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body)
      };
      const response = await fetch("https://api.shipengine.com/v1/addresses/validate", options);
      const parsedResponse = await response.json();
      res.json(parsedResponse);
    }
    catch (e) {
      console.error(e.message);
      res.send(500, "Unexpected Server Error");
    }
  });

  module.exports = router;