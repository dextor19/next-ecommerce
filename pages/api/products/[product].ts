import data from '../data.json';

export function getProductById(id: number) {
  if (typeof id !== 'undefined') {
    const product = data.filter((product: any) => product.id.toString() === id.toString());
    return product;
  }
}

export function getRecommendedProducts(recommended: Array<number>) {
  let products: any = [];
  recommended.map((item: number) => {
    products.push(data.find((product:any) => product.id.toString() === item.toString()));
  });
  return products;
}

export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const product = getProductById(req.query.product);
    res.status(200).json(product);
  }
}