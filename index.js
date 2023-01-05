const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

const app = express();
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

//port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
