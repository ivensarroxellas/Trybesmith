import { Request, Response } from 'express';
import productService from '../services/productService';

const getAll = async (_req: Request, res: Response) => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

const createProduct = async (req: Request, res: Response) => {
  const { type, message } = await productService.createProduct(req.body);
  if (type) return res.status(444).json({ message: 'Erro na criação' });
  return res.status(201).json(message);
};

export default { getAll, createProduct };