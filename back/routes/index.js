const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.status(200).json({ error: false });
});

router.get("/api/items", function (req, res, next) {
  const search = req.query.search.trim() || '';

  if (search) {
    res.status(200).json({ error: false });
  } else {
    res.status(502).json({ error: true });
  }
});

module.exports = router;
