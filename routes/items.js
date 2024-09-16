import { Router } from "express";
import { Item } from "../models/items.model.js";
import { v4 as uuidv4 } from 'uuid';

const router = Router();

router.get('/items', async(req, res) => {
 try {
    const items = await Item.find();
    res.status(200).json(items)
 } catch (error) {
    res.status(404).json({message: error.message})
 }
});

router.get('/items/:id', async(req, res) => {
    const id = req.params.id;
    try {
        const item = await Item.findById(id);
        res.status(200).json(item)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
});
router.post('/items',async(req,res) => {
    const newItem = {
        id: uuidv4(),
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }
    try {
        const item = await new Item(newItem).save();
        res.status(201).json(item)
    } catch (error) {
        res.status(500).json({message: error.message})   
    }
})
router.put('/items/:id',async(req,res) => {
    const newItem = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }
    try {
       const findItem = await Item.findOne({ id: req.params.id });
       if(!findItem){
           res.status(404).json({message: 'Can not get Item'})
        }
    const item = await Item.findOneAndUpdate(
        { id: req.params.id },
         newItem,
        { new: true }
    )
    res.status(200).json(item);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export default router;
