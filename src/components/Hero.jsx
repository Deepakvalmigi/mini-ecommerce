import Link from 'next/link';
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-r from-primary/10 to-accent/10 py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight font-headline md:text-5xl lg:text-6xl">
          Discover Your Next Favorite Thing
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Browse our curated collection of high-quality products, designed to bring joy and function to your life.
        </p>
        <Button asChild size="lg">
          <Link href="#products">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Shop Now
          </Link>
        </Button>
      </div>
    </section>
  );
}
