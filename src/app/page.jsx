import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import Hero from '@/components/Hero';
import Faq from '@/components/Faq';

export default function Home() {
  return (
    <>
      <Hero />
      <div id="products" className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground sm:mb-12 sm:text-4xl font-headline">
          Explore Our Products
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Faq />
    </>
  );
}
