'use client'

import { createContext, useContext, useState } from 'react'
import type { Cart, ShopContextValue, CartItem } from '@/types/shop'

const ShopContext = createContext<ShopContextValue | null>(null)

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>({ items: [] })

  const addToCart = (item: CartItem) => {
    setCart((prev) => ({ ...prev, items: [...prev.items, item] }))
  }

  const removeFromCart = (kitchenId: string) => {
    setCart((prev) => ({ ...prev, items: prev.items.filter((i) => i.kitchenId !== kitchenId) }))
  }

  const clearCart = () => setCart({ items: [] })

  return (
    <ShopContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </ShopContext.Provider>
  )
}

export function useShop() {
  const ctx = useContext(ShopContext)
  if (!ctx) throw new Error('useShop must be used within ShopProvider')
  return ctx
}
