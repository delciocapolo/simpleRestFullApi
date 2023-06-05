const express = require("express");
require("dotenv").config();

const app = express();
app.listen(process.env.PORT || 5500, () => console.log(`Server is running at http://127.0.0.1:${process.env.PORT}`));

module.exports = app;