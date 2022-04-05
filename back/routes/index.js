const express = require("express");
const router = express.Router();

const axios = require("axios").default;

router.get("/", function (req, res, next) {
  res.status(200).json({ error: false });
});

router.get("/api/items", function (req, res, next) {
  const search = req.query.search.trim() || '';

  if (search) {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`).then(results => {
      console.log('produtos', results.toString());
    })

    res.status(200).json({ error: false });
  } else {
    res.status(502).json({ error: true });
  }
});

module.exports = router;
