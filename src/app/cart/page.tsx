"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function CartPage() {
  const { state, updateQuantity, removeFromCart, total } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  if (state.cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingCart className="mx-auto h-20 w-20 text-muted-foreground" />
        <h1 className="mt-4 text-3xl font-bold font-headline">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild className="mt-6">
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="mb-8 text-center text-3xl font-bold tracking-tight font-headline sm:text-4xl">
        Your Cart
      </h1>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {state.cartItems.map(({ product, quantity }) => (
            <Card key={product.id} className="flex items-center p-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  data-ai-hint={product.imageHint}
                />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{formatPrice(product.price)}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(product.id, quantity - 1)}>
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => updateQuantity(product.id, parseInt(e.target.value) || 1)}
                  className="h-8 w-14 text-center"
                  min="1"
                />
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(product.id, quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => removeFromCart(product.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full">
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
