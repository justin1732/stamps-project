// //Dependencies
// const express = require("express");
// const path = require("path");
// const PORT = process.env.PORT || 3001;
// const app = express();
// // // const mongoose = require("mongoose");
// const config = require("./config");
// const fetch = require("node-fetch");
// const router = express.Router();
// require("dotenv").config();

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));


// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// //Connect to MongoDB
// // var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/book";
// // mongoose
// //     .connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
// //         if (err) throw err;
// //         console.log("database connected")
// //     })
// //     .then(() => console.log("Database Connected!"))
// //     .catch(err => console.log(err));
// // Define API routes here

// // Verification
// // app.get("/search/:search", (req, res) => {
// //   let search = req.params.search;
// //   const headers = const headers = {
// //     'api-key': '<your-api-key>',
// //     'Content-Type': 'application/json',
// //   };
// router.post("/verify-addresses", async (req, res) => {
//     try {
  
//       const options = {
//         "method": "POST",
//         "headers": {
//           "Host": "api.shipengine.com",
//           "API-Key": config.shipengine.apiKey,
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
  
// //get all saved books from db


// // Send every other request to the React app
// // Define any API routes before this runs
// // app.get("*", (req, res) => {
// //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// // });

// // app.listen(PORT, () => {
// //   console.log(`🌎 ==> API server now on port ${PORT}!`);
// // });