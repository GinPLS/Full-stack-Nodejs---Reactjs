import express from "express";
import connectDB from "./config/connectDB";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine"
import initWebRoutes from './route/web'
require('dotenv').config()

let app = express();

// config app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

viewEngine(app)
initWebRoutes(app)
connectDB()

let port = process.env.PORT;

app.listen(port , () =>{
    console.log(" backend :" + port)
});
