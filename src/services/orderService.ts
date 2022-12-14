import orderModel from '../models/orderModel';
import { TOrder } from '../types';

const getAllOrders = async (): Promise<TOrder[]> => {
  const users = await orderModel.getAllOrders();
  return users;
};

export default { getAllOrders };