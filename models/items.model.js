import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: String,
        required: true
    },
}, {timestamps: true});

export const Item = mongoose.model('Item', itemSchema);
