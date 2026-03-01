"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Product = {
  id: string
  name: string
  price: number
}

type CartItem = Product & {
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  applyCoupon: (code: string) => void
  discount: number
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const coupons: Record<string, number> = {
  PRIME10: 10,
  VIP20: 20,
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [discount, setDiscount] = useState(0)

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
    setDiscount(0)
  }

  const applyCoupon = (code: string) => {
    const normalized = code.toUpperCase()
    if (coupons[normalized]) {
      setDiscount(coupons[normalized])
    }
  }

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const total = subtotal - subtotal * (discount / 100)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        applyCoupon,
        discount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}