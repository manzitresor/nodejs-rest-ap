import express from "express";
import bodyParser from "body-parse";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.listen(PORT,()=> console.log("Server started...."));