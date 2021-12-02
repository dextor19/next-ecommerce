import data from './data.json';

export function getProductById(id: number) {
  if (typeof id !== 'undefined') {
    const product = data.filter((product: any) => product.id.toString() === id.toString());
    return product;
  }
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