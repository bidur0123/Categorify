//jshint esversion:6
const express = require("express");
const constants = require("./config/constants.config");
const cors=require("cors");
const tokenMiddleware = require("./middleware/auth.middleware");
const router = require("./routes/products.routes");
require("dotenv").config();

const app = express();
const apiPrefix = '/api/v1';

// Set trust proxy for reverse proxy support
app.set("trust proxy", 1);

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(tokenMiddleware);





// Import and use the routers
app.use(`${apiPrefix}`,router)
// Start the server
app.listen(constants.PORT, () => console.log(`Server running at port ${constants.PORT}`));