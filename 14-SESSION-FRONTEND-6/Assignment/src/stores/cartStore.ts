import { create } from "zustand";
import { persist } from "zustand/middleware"; // 추가
import type { Product } from "../types/product";

interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (index) =>
        set((state) => ({ cart: state.cart.filter((_, i) => i !== index) })),
    }),
    { name: "cart-storage" } // localStorage에 저장될 키 이름
  )
);