import express from 'express';
import productController from './controllers/productController';
import userController from './controllers/userController';
import orderController from './controllers/orderController';

const app = express();

app.use(express.json());

app.get('/products', productController.getAll);
app.post('/products', productController.createProduct);
app.post('/users', userController.createUser);
app.get('/orders', orderController.getAllOrders);

export default app;
