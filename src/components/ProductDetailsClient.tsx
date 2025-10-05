"use client";

import Image from "next/image";
import { PlusCircle } from "lucide-react";

import type { Product } from "@/types";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";

interface ProductDetailsClientProps {
  product: Product;
}

export default function ProductDetailsClient({ product }: ProductDetailsClientProps) {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="h-full w-full object-cover"
            data-ai-hint={product.imageHint}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="mb-2 text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            {product.name}
          </h1>
          <p className="mb-4 text-3xl font-bold text-primary">
            {formatPrice(product.price)}
          </p>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            {product.description}
          </p>
          <Button size="lg" onClick={() => addToCart(product)}>
            <PlusCircle className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
