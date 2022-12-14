import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import { TUser } from '../types';

const generateToken = (user: TUser) => {
  const payload = { username: user.username };
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

const createUser = async (userInfo: TUser) => {
  await userModel.createUser(userInfo);
  return generateToken(userInfo);
};

export default { createUser };