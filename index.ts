import * as dotenv from 'dotenv';
const chalk = require('chalk');
import * as express from "express";
const morgan = require("morgan");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello there world!")
});

app.listen(3333)
app.use(morgan("tiny"));

console.log(chalk.green("Server running! ✔️"));