import express from "express";
import bodyParser from 'body-parser'
import router from "./routes/items.js"


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/items',router)



app.listen(PORT,()=> console.log("Server started...."));