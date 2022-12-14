import { RowDataPacket } from 'mysql2/promise';
import { TOrder } from '../types';
import connection from './connection';

const getAllOrders = async (): Promise<TOrder[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & TOrder[]>(
    `SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.orders AS orders
    INNER JOIN Trybesmith.products AS products
    WHERE orders.id = products.order_id
    GROUP BY orders.id;`,
  );
  return rows;
};

export = {
  getAllOrders,
};