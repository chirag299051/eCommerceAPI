const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')
/* Models */
const ProductModel = mongoose.model('Flipkart')

/**
 * function to read all Products.
 */
let getAllProducts = (req, res) => {
    ProductModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Product Controller: getAllProducts', 10)
                let apiResponse = response.generate(true, 'Failed To Find Product Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Product Found', 'Product Controller: getAllProducts')
                let apiResponse = response.generate(true, 'No Product Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Product Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all Products

/**
 * function to read single Product.
 */
let viewByProductId = (req, res) => {

    if (check.isEmpty(req.params.productId)) {

        console.log('ProductId should be passed')
        let apiResponse = response.generate(true, 'productId is missing', 403, null)
        res.send(apiResponse)
    } else {

        ProductModel.findOne({ 'productId': req.params.productId }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Product found successfully","ProductController:ViewProductById",5)
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to read Products by category.
 */
let viewByCategory = (req, res) => {

    if (check.isEmpty(req.params.categoryId)) {

        console.log('categoryId should be passed')
        let apiResponse = response.generate(true, 'CategoryId is missing', 403, null)
        res.send(apiResponse)
    } else {

        ProductModel.find({ 'category': req.params.category }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Products Not Found.')
                let apiResponse = response.generate(true, 'Products Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Products Found Successfully')
                let apiResponse = response.generate(false, 'Products Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to read Products by author.
 */
let viewByRating = (req, res) => {

    if (check.isEmpty(req.params.ratingId)) {

        console.log('rating should be passed')
        let apiResponse = response.generate(true, 'rating is missing', 403, null)
        res.send(apiResponse)
    } else {

        ProductModel.find({ 'rating': req.params.rating }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Products Not Found.')
                let apiResponse = response.generate(true, 'Products Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Products Found Successfully')
                let apiResponse = response.generate(false, 'Products Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to edit Product by admin.
 */
let editProduct = (req, res) => {

    if (check.isEmpty(req.params.productId)) {

        console.log('productId should be passed')
        let apiResponse = response.generate(true, 'productId is missing', 403, null)
        res.send(apiResponse)
    } else {

        let options = req.body;
        console.log(options);
        ProductModel.update({ 'productId': req.params.productId }, options, { multi: true }).exec((err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Product Edited Successfully')
                let apiResponse = response.generate(false, 'Product Edited Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to find the assignment.
 */
let findProductToEdit = (productId) => {

    if (check.isEmpty(req.params.productId)) {

        console.log('productId should be passed')
        let apiResponse = response.generate(true, 'ProductId is missing', 403, null)
        reject(apiResponse)
    } else {
        return new Promise((resolve, reject) => {
            ProductModel.findOne({ 'productId': req.params.productId }, (err, product) => {
                if (err) {
                    console.log('Error Occured.')
                    logger.error(`Error Occured : ${err}`, 'Database', 10)
                    let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(Product)) {
                    console.log('Product Not Found.')
                    let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                    reject(apiResponse)
                } else {
                    console.log('Product Found.')
                    resolve(product)
                }
            })
        })
    }
}

/**
 * function to delete the assignment collection.
 */
let deleteProduct = (req, res) => {

    if (check.isEmpty(req.params.productId)) {

        console.log('productId should be passed')
        let apiResponse = response.generate(true, 'productId is missing', 403, null)
        res.send(apiResponse)
    } else {

        ProductModel.remove({ 'productId': req.params.productId }, (err, result) => {
            if (err) {
                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found.', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Product Deletion Success')
                let apiResponse = response.generate(false, 'Product Deleted Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to create the Product.
 */
let createProduct = (req, res) => {
    let productCreationFunction = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.title) || check.isEmpty(req.body.description) || check.isEmpty(req.body.productBody) || check.isEmpty(req.body.category)) {

                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)
            } else {

                var today = Date.now()
                let productId = shortid.generate()

                let newProduct = new ProductModel({

                    productId: productId,
                    title: req.body.title,
                    description: req.body.description,
                    bodyHtml: req.body.productBody,
                    price: req.body.price,
                    category: req.body.category,
                    rating: req.body.rating,
                    shippingCost: req.body.shippingCost,
                    warranty: req.body.warranty,
                    cashOnDelivery: false
                    
                }) // end new Product model


                newProduct.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Success in Product creation')
                        resolve(result)
                    }
                }) // end new Product save
            }
        }) // end new Product promise
    } // end create Product function

    // making promise call.
    productCreationFunction()
        .then((result) => {
            let apiResponse = response.generate(false, 'Product Created successfully', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}


module.exports = {

    getAllProducts: getAllProducts,
    createProduct: createProduct,
    viewByProductId: viewByProductId,
    viewByCategory: viewByCategory,
    viewByRating: viewByRating,
    editProduct: editProduct,
    deleteProduct: deleteProduct,

}// end exports