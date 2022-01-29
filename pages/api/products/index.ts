import data from '../data.json';

export function getProducts() {
  return data;
}

export function getNewArrivals() {
  let products: any = [];
  data.map((obj: any) => {
    if (new Date(obj.createdAt) > new Date()){
      products.push(obj);
    }
  });
  return products;
}

export default function handler (req: any, res: any) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProducts();
    res.status(200).json(products);
  }
}