export type TProduct = {
  id?: string
  name: string,
  amount: string,
};

export type TUser = { 
  username: string,
  vocation: string,
  level: number,
  password: string
};

export type TOrder = { 
  id?: number,
  userId: number,
  productsIds: number[]
};