import { Product } from "interfaces/Products";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getProducts = async (): Promise<Product[]> => {
  await sleep(500);
  return [
    { id: 1, name: 'First Product' },
    { id: 2, name: 'Second Product' },
    { id: 3, name: 'Third Product' },
    { id: 4, name: 'Four Product' },
    { id: 5, name: 'Fifth Product' },
  ];
};

export const makePurchase = async () => {
  await sleep(1000);
  return 'success';
};
