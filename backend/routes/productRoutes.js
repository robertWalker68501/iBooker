import express from 'express';

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getAllProducts).post(createProduct);

router
  .route('/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

router.route('/:id/reviews').post(createProductReview);

export default router;
