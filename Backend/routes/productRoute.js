import express from 'express';
import { listProducts, addProduct, removeProduct, singleProduct } from '../Controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

productRouter.post('/add', adminAuth, upload.fields([{name:'image1', maxCount:1}, {name:'image2', maxCount:1}, {name:'image3', maxCount:1}, {name:'image4', maxCount:1}]), addProduct);
productRouter.get('/list', listProducts);
productRouter.post('/single', singleProduct);
productRouter.post('/remove', adminAuth, removeProduct);

export default productRouter;