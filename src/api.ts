import { Product } from "interfaces/Products";
import courses from 'data/products.json';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getProducts = async (): Promise<Product[]> => {
  await sleep(500);
  return courses;
};

export const makePurchase = async () => {
  await sleep(1000);
  return 'success';
};
