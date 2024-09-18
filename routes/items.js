import { Router } from "express";
import {getAllItems,getItem,createItem,updateItem,deleteItem} from "../controllers/items.controller.js"

const router = Router();

router.get('/items', getAllItems);

router.get('/items/:id',getItem);
router.post('/items', createItem)
router.put('/items/:id',updateItem)
router.delete('/items/:id',deleteItem)

export default router;
