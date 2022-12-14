import productModel from '../models/productModel';
import { TProduct } from '../types';

const getAll = async (): Promise<TProduct[]> => {
  const users = await productModel.getAll();
  return users;
};
const createProduct = async (productInfo: TProduct) => {
  const newProduct = await productModel.createProduct(productInfo);
  return { type: null, message: newProduct };
};

export default { getAll, createProduct };