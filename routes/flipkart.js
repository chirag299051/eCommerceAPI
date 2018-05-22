const express = require('express');
const router = express.Router();
const productController = require("./../controllers/flipkartController");
const appConfig = require("./../config/appConfig")
const auth = require("./../middlewares/auth")

module.exports.setRouter = function(app){

	let baseUrl = appConfig.apiVersion+'/products';
	
	

    app.get(baseUrl+'/all',auth.isAuthenticated,productController.getAllProducts);

	/**
	 * @api {get} /api/v1/products/all Get all products
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Product Details Found",
	    "status": 200,
	    "data": [
					{
						productId: "string",
						title: "string",
                        description: "string",
                        price: "number",
						bodyHtml: "string",
                        category: "string",
                        rating: "number",
                        shippingCost: "string",
                        warranty: "string",
                        cashOnDelivery: "boolean"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Product Details",
	    "status": 500,
	    "data": null
	   }
	 */


    app.get(baseUrl+'/view/:productId',auth.isAuthenticated,productController.viewByProductId);

    /**
	 * @api {get} /api/v1/product/view/:productId Get a single product
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId The productId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Found Successfully.",
	    "status": 200,
	    "data": {
	    			_id: "string",
	    			__v: number
					productId: "string",
						title: "string",
                        description: "string",
                        price: "number",
						bodyHtml: "string",
                        category: "string",
                        rating: "number",
                        shippingCost: "string",
                        warranty: "string",
                        cashOnDelivery: "boolean"
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

    

    /**
	 * @api {get} /api/v1/products/view/by/rating/:rating Get products by rating
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} rating rating of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Found Successfully.",
	    "status": 200,
	    "data": [
					{
						productId: "string",
						title: "string",
                        description: "string",
                        price: "number",
						bodyHtml: "string",
                        category: "string",
                        rating: "number",
                        shippingCost: "string",
                        warranty: "string",
                        cashOnDelivery: "boolean"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/view/by/category/:category',auth.isAuthenticated,productController.viewByCategory);

    /**
	 * @api {get} /api/v1/products/view/by/category/:category Get products by category
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} category category of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Found Successfully.",
	    "status": 200,
	    "data": [
					{
						productId: "string",
						title: "string",
                        description: "string",
                        price: "number",
						bodyHtml: "string",
                        category: "string",
                        rating: "number",
                        shippingCost: "string",
                        warranty: "string",
                        cashOnDelivery: "boolean"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl+'/:productId/delete',auth.isAuthenticated,productController.deleteProduct);

    /**
	 * @api {post} /api/v1/products/:productId/delete Delete product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId productId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Deleted Successfully",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.put(baseUrl+'/:productId/edit',auth.isAuthenticated,productController.editProduct);

    /**
	 * @api {put} /api/v1/products/:productId/edit Edit product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId productId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Edited Successfully.",
	    "status": 200,
	    "data": [
					{
						productId: "string",
						title: "string",
                        description: "string",
                        price: "number",
						bodyHtml: "string",
                        category: "string",
                        rating: "number",
                        shippingCost: "string",
                        warranty: "string",
                        cashOnDelivery: "boolean"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl+'/create',auth.isAuthenticated,productController.createProduct);

    /**
	 * @api {post} /api/v1/products/create Create product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} title title of the product passed as a body parameter
	 * @apiParam {String} description description of the product passed as a body parameter
	 * @apiParam {String} productBody productBody of the product passed as a body parameter
	 * @apiParam {String} category category of the product passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "product Created successfully",
	    "status": 200,
	    "data": [
					{
						productId: "string",
						title: "string",
                        description: "string",
                        price: "number",
						bodyHtml: "string",
                        category: "string",
                        rating: "number",
                        shippingCost: "string",
                        warranty: "string",
                        cashOnDelivery: "boolean"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    
    

}


