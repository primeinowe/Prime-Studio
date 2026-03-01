"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/context/CartContext"

export default function CartDrawer({ open, onClose }: any) {
  const { cart, removeFromCart, total, applyCoupon, discount } = useCart()
  const [couponCode, setCouponCode] = useState("")

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-96 bg-[#0F172A] border-l border-blue-900/40 z-50 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Seu Carrinho</h2>
              <button onClick={onClose}>
                <X />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border border-blue-900/40 p-4 rounded-xl"
                >
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-white/60">
                    {item.quantity}x R$ {item.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 text-xs mt-2"
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>

            {/* CUPOM */}
            <div className="mt-6">
              <input
                type="text"
                placeholder="Cupom de desconto"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="w-full bg-[#0B1120] border border-blue-900/40 rounded-xl px-4 py-2 text-sm"
              />
              <button
                onClick={() => applyCoupon(couponCode)}
                className="w-full mt-3 bg-blue-600 hover:bg-blue-500 transition py-2 rounded-xl text-sm"
              >
                Aplicar Cupom
              </button>

              {discount > 0 && (
                <p className="text-green-400 text-sm mt-2">
                  Cupom aplicado: {discount}% OFF
                </p>
              )}
            </div>

            <div className="mt-6 border-t border-blue-900/40 pt-4">
              <p className="text-lg font-bold">
                Total: R$ {total.toFixed(2)}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}