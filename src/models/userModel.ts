import { ResultSetHeader } from 'mysql2/promise';
import { TUser } from '../types';

import connection from './connection';

const createUser = async (userInfo: TUser): Promise<object> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [userInfo.username, userInfo.vocation, userInfo.level, userInfo.password],
  );
  return { id: insertId, ...userInfo };
};

export default { createUser };