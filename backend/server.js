//Backend Dependencies
const express = require('express');
const path = require("path");
const app = express ();
const PORT = process.env.port || 3001;
const axios = require("axios");
const router = require("router");

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//static assets above
if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}
//Pushing API routing
//test push


// axios.post("/verify-addresses", async (req, res) => {
//     try {
  
//       const options = {
//         "method": "POST",
//         "headers": {
//           "Host": "api.shipengine.com",
//           "API-Key": 'TEST_J6h+wzVuOOQlnxi4H6VwhZoBWolFjnM61n6J3K1bTcY',
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(req.body)
//       };
//       const response = await fetch("https://api.shipengine.com/v1/addresses/validate", options);
//       const parsedResponse = await response.json();
//       res.json(parsedResponse);
//     }
//     catch (e) {
//       console.error(e.message);
//       res.send(500, "Unexpected Server Error");
//     }
//   });

app.listen(PORT, ()=> {
console.log(`🌎 ==> API server now on port ${PORT}!`);
});