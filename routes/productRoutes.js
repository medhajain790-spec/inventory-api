const express = require("express");
const c = require("../controllers/productController");
const validateObjectId = require("../middleware/validateObjectId");

const router = express.Router();

router.route("/").get(c.getProducts).post(c.createProduct);

// IMPORTANT: static routes must come BEFORE "/:id", otherwise
// "low-stock" and "summary" would be treated as an ID.
router.get("/low-stock", c.getLowStock);
router.get("/summary", c.getSummary);

router
  .route("/:id")
  .get(validateObjectId, c.getProductById)
  .put(validateObjectId, c.updateProduct)
  .delete(validateObjectId, c.deleteProduct);

router.patch("/:id/stock", validateObjectId, c.adjustStock);

module.exports = router;
