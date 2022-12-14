import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { TProduct } from '../types';
import connection from './connection';

const getAll = async (): Promise<TProduct[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & TProduct[]>(
    'SELECT id, name, amount FROM Trybesmith.products;',
  );
  return rows;
};

const createProduct = async (productInfo: TProduct): Promise<object> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [productInfo.name, productInfo.amount],
  );
  return { id: insertId, ...productInfo };
};

export default { getAll, createProduct };