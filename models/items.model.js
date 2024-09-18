import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    item_id: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        unique: true
    },
    description: {
        type: String,
    },
    price: {
        type: String,
        required: true
    },
},{timestamps: true})

export const Item = mongoose.model('Item',itemSchema);
