require("dotenv").config();
const express = require("express");
const dbConfig = require('./src/config/db.config');
const { UserRouter} = require("./src/routes")

const app = express();
app.use(express.json());

dbConfig.authenticate()
.then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("Database connection failed", err));

//Routes
app.get("/", (req, res)=>{
    res.send("Welcome to auth-service!");
});
app.use("/auth", UserRouter);

const   PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Auth Service listening on ${PORT}`));