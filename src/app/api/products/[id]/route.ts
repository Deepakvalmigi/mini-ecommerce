import { NextResponse } from 'next/server';
import { products } from '@/lib/products';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find(p => p.id === params.id);
  if (product) {
    return NextResponse.json(product);
  }
  return new Response('Product not found', { status: 404 });
}
