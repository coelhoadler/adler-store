const express = require("express");
const router = express.Router();
const Products = require("../utils/Products");

router.get("/", function (req, res, next) {
  res.status(200).json({ error: false });
});

router.get("/api/items", async function (req, res, next) {
  const search = req.query.search.trim() || "";

  if (search) {
    const products = await new Products().listAll(search);
    res.status(200).json(products);
  } else {
    res.status(502).json({ error: true });
  }
});

router.get("/api/items/:id", async function (req, res, next) {
  const productId = req.params.id || '';
  const product = await new Products().list(productId);
  res.status(200).json(product);
});

module.exports = router;
