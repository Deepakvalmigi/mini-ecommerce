"use client";

import Link from "next/link";
import { ShoppingCart, Package } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Header() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
          <Package className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg font-headline">ShopSphere</span>
        </Link>
        <nav>
          <Button asChild variant="ghost" size="icon">
            <Link href="/cart" aria-label={`View your cart with ${itemCount} items`}>
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 justify-center rounded-full p-0 text-xs"
                  >
                    {itemCount}
                  </Badge>
                )}
              </div>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
