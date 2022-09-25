const express = require("express");
const cors = require('cors');
const queryCount = require('./middlewares/query-count');

/**
 * setup express app
 */
const app = express();

/**
 * configure express app
 */
app.use(cors());
app.use(queryCount);

/** routes */
app.use("/api/", require("./routes/api"));

/**
 * start server
 */
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API server is running on: ${port}`));