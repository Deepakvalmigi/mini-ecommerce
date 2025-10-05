"use client";

import type { CartItem, Product } from "@/types";
import { useToast } from "@/hooks/use-toast";
import React, { createContext, useReducer, useEffect, ReactNode } from "react";

type CartState = {
  cartItems: CartItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "SET_STATE"; payload: CartState };

type CartContextType = {
  state: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  itemCount: number;
  total: number;
};

const initialState: CartState = {
  cartItems: [],
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.cartItems.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { product: action.payload, quantity: 1 }],
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product.id !== action.payload.id
        ),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.product.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    case "SET_STATE":
      return action.payload;
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const storedState = localStorage.getItem("cartState");
      if (storedState) {
        dispatch({ type: "SET_STATE", payload: JSON.parse(storedState) });
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cartState", JSON.stringify(state));
    } catch (error) {
      console.error("Failed to save cart to localStorage", error);
    }
  }, [state]);

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const itemCount = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const total = state.cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ state, addToCart, removeFromCart, updateQuantity, itemCount, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
