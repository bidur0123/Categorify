const router = require("express").Router();
const products = require("../controllers/productCategory.controllers")


router.get("/categories/:categoryname/products",products.getProducts)

module.exports=router