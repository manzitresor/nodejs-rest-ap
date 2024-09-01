import { Router } from "express";
import { items } from "../data.js"; 

const router = Router();

router.get('/', (req, res) => {
    res.status(200).send(items);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const item = items.find(item => item.id === id);

    if (item) {
        res.send(item);
    } else {
        res.status(404).send({ message: "Item not found" });
    }
});

export default router;
