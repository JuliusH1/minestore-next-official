import { TCart } from '@/types/cart';
import { create } from 'zustand';

type CartStore = {
    cart?: TCart['cart'];
    items: TCart['items'];
    setCart(cart: TCart): void;
};

export const useCartStore = create<CartStore>((set) => ({
   cart: undefined,
   items: [],
   setCart: ({ cart, items }) => set({
      cart: { ...cart, theme: 'voidcraftmc' },
      items
   })
}));
