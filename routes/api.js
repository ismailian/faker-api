const express = require("express");

/**
 * express Router
 */
const Router = express.Router();

/**
 * Initialize endpoint
 */
Router.use("/fake", require("../core/handlers/Fake"));


/* exporting router */
module.exports = Router;