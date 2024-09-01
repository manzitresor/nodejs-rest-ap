import { Router } from "express";
import { items } from "../data.js";

const router = Router()

router.get('/',(req,res)=> {
    res.statusCode = 200;
    res.send(items);
})

export default router;