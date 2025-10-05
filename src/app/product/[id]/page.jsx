import { products } from '@/lib/products';
import ProductDetailsClient from '@/components/ProductDetailsClient';
import { notFound } from 'next/navigation';

const getProduct = (id) => {
    return products.find(p => p.id === id);
}

export async function generateMetadata(
  { params },
  parent
) {
  const product = getProduct(params.id);
  const previousTitle = (await parent).title?.absolute || 'ShopSphere';

  if (!product) {
    return {
      title: `Product not found | ${previousTitle}`,
    };
  }

  return {
    title: `${product.name} | ${previousTitle}`,
    description: product.description,
  };
}

export default function ProductPage({ params }) {
  const product = getProduct(params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetailsClient product={product} />;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
