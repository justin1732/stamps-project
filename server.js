//Dependencies
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
// const mongoose = require("mongoose");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//Connect to MongoDB
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/book";
// mongoose
//     .connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
//         if (err) throw err;
//         console.log("database connected")
//     })
//     .then(() => console.log("Database Connected!"))
//     .catch(err => console.log(err));
// Define API routes here
//search route
// app.get("/search/:search", (req, res) => {
//   let search = req.params.search;
//   const headers = const headers = {
//     'api-key': '<your-api-key>',
//     'Content-Type': 'application/json',
//   };
//   axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search).then(function(response) {
//       let address = response.data.items
//       // console.log(books)
//       let array =[];
//       for(let i=0; i<address.length; i++) {
//         if(address[i].volumeInfo.imageLinks !== undefined && address[i].volumeInfo.authors !== undefined){
//         let bookInfo = {
//               title: books[i].volumeInfo.title,
//               authors: books[i].volumeInfo.authors,
//               description: books[i].volumeInfo.description,
//               image: books[i].volumeInfo.imageLinks.smallThumbnail,
//               link: books[i].volumeInfo.infoLink
//           }
//         array.push(bookInfo);  
//       }}
//       db.Book
//             .create(array)
//             .then(dbBook => res.json(dbBook))
//             .catch(err => res.json(err))
//     })
// })
//get all saved books from db


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});