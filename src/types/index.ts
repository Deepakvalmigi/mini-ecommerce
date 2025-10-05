export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  imageHint: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
