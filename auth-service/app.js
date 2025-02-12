require("dotenv").config();
const express = require("express");
const dbConfig = require('./src/config/db.config');

const app = express();
app.use(express.json());

dbConfig.authenticate()
.then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("Database connection failed", err));

app.get("/", (req, res)=>{
    res.send("Welcome to auth-service!");
});

const   PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Auth Service listening on ${PORT}`));