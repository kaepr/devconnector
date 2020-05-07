const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Post = require("../../models/Post");
const User = require("../../models/User");
const checkObjectId = require("../../middleware/checkObjectId");



// @route GET api/posts
// @desc Test Route
// @access Public
router.get("/", (req, res) => res.send("posts route"));

module.exports = router;
