import { NextResponse } from 'next/server';

const products = [
  { id: '1', name: 'Product 1', price: 10 },
  { id: '2', name: 'Product 2', price: 20 },
  { id: '3', name: 'Product 3', price: 30 },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
