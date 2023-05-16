const express = require("express");

const router = express.Router();

// Endpoint to create blog
router.post("/create", (req, res) => {
  res.json({
    message: "Blog has been created",
  });
});

// Endpoint to get all the blogs
router.get("/get", (req, res) => {
  res.json({
    message: "All blogs fetched",
  });
});

// Endpoint to delete blog
router.delete("/delete/:id", (req, res) => {
  res.json({
    message: "Blog has been deleted",
  });
});

// Update blog
router.put("/update/:id", (req, res) => {
  res.json({
    message: "Blog has been updated",
  });
});

module.exports = router;
