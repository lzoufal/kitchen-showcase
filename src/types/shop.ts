export interface CartItem {
  kitchenId: string
  quantity: number
  configurationId?: string
}

export interface Cart {
  items: CartItem[]
  total?: number
  currency?: string
}

export interface ShopContextValue {
  cart: Cart
  addToCart: (item: CartItem) => void
  removeFromCart: (kitchenId: string) => void
  clearCart: () => void
}
