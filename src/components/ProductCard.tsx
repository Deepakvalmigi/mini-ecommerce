"use client";

import Image from "next/image";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import type { Product } from "@/types";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from "@/hooks/useCart";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/product/${product.id}`} className="block overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
            data-ai-hint={product.imageHint}
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="mb-2 text-lg font-semibold leading-tight">
          <Link href={`/product/${product.id}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </CardTitle>
        <p className="text-xl font-bold text-primary">{formatPrice(product.price)}</p>
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-2 p-4 pt-0">
         <Button asChild variant="outline">
          <Link href={`/product/${product.id}`}>View Details</Link>
        </Button>
        <Button onClick={() => addToCart(product)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
