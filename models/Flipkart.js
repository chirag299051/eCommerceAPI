// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let flipkartSchema = new Schema(
    {
        productId: {
            type: String,
            unique: true
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        bodyHtml: {
            type: String,
            default: ''
        },
        price: {
            type: Number,
            default: ''
        },
        rating: {
            type: String,
            default: ''
        },
        category: {
            type: String,
            default: ''
        },
        shippingCost: {
            type: String,
            default: ''
        },
        warranty: {
            type: String,
            default: ''
        }, 
        cashOnDelivery: {
            type: Boolean,
            default: false
        }
    }
)

mongoose.model('Flipkart', flipkartSchema);