import { Request, Response } from 'express';
import orderService from '../services/orderService';

const getAllOrders = async (_req: Request, res: Response) => {
  const orders = await orderService.getAllOrders();
  res.status(200).json(orders);
};

export default { getAllOrders };