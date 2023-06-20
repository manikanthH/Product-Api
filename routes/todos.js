const express  = require("express");
const router = express.Router();

//importing controller
const {createProduct} = require("../controllers/createProduct");
const {getProduct,getProductById} = require("../controllers/getProduct.js");
const {updateProductById} = require("../controllers/updateProductById");
const {deleteProductById} = require("../controllers/deleteProductById")

//imprting middlewares
const { validateRequest } = require("../middlewares/validation");
const { authenticateToken } = require("../middlewares/auth");

router.post("/product",validateRequest, createProduct);
router.get("/products",validateRequest,getProduct);
router.get("/products/:id",validateRequest, getProductById);
router.put("/product/:id",validateRequest, updateProductById);
router.delete("/product/:id",validateRequest, deleteProductById);

//define APi routes


module.exports = router;