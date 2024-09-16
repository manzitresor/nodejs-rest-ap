import express from "express";
import router from "./routes/items.js"
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const app = express();
const port = process.env.PORT || 3000;
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('Error', ()=> console.log('Failed to connect'))
db.once('open',()=> console.log('DB Connected....'))

app.use(express.json());
app.use('/api',router);



app.listen(port,()=> console.log(`Server is running on Port ${port}`));


