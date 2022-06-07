import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
name: {type: String, required: true, unique: true},
slug: {type: String, required: true, unique: true},
author: {type: String, required: true},
image:{type: String, required: true },
category:{type: String, required: true },
description:{type: String, required: true },
price:{type: String, required: true },
counterInStock: {type: String, required: true },
rating:{type: String, required: true },
numReview:{type: String, required: true },
},
{
    timestamp: true,
}
);
const Product = mongoose.model('Product', productSchema);
    export default Product;
