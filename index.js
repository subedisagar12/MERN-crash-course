// Importing express package
const express = require("express");

// Importing mongoose
const mongoose = require("mongoose");

// initializing express server
const app = express();

// importing routes
const blogRoutes = require("./routes/blogRoutes");

// Responding to the request

// app.get("/hi/:id", (req, res) => {
//   res.json({
//     message: "Hi",
//   });
// });

// app.post("/hello", (req, res) => {
//   res.json({
//     message: "Hello route called",
//   });
// });

app.use("/blog", blogRoutes);

// connecting to our database
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.j9higjy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error.message);
  });

// listening to the request
app.listen(8000, () => {
  console.log("Server is running !!");
});
