const express = require("express");

const router = express.Router();

const Blog = require("../models/blogModel");

// Endpoint to create blog
router.post("/create", async (req, res) => {
  try {
    let newBlog = await Blog.create({
      title: req.body.title,
      description: req.body.description,
    });

    res.json({
      message: "Blog has been created",
      data: newBlog,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// Endpoint to get all the blogs
router.get("/get", async (req, res) => {
  try {
    let allBlogs = await Blog.find();

    res.json({
      message: "All blogs fetched",
      data: allBlogs,
    });
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
});

// Endpoint to delete blog
router.delete("/delete/:id", async (req, res) => {
  try {
    let deletedBlog = await Blog.findByIdAndDelete(req.params.id);

    res.json({
      message: "Blog has been deleted",
      data: deletedBlog,
    });
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
});

// Update blog
router.put("/update/:id", (req, res) => {
  res.json({
    message: "Blog has been updated",
  });
});

module.exports = router;
