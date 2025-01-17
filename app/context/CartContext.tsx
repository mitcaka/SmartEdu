import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import toast from 'react-hot-toast';

interface Thumbnail {
  public_id: string;
  url: string;
}

interface Product {
  _id: number;
  name: string;
  description: string;
  categories: string;
  price: number;
  estimatedPrice?: number;
  thumbnail: Thumbnail;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  getTotalPrice: () => number;
  getTotalQuantity: () => number; 
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    // Lấy giỏ hàng từ localStorage khi khởi tạo
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Lưu giỏ hàng vào localStorage mỗi khi cart thay đổi
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    const productExists = cart.some(item => item._id === product._id);
    if (productExists) {
      toast.error("Khóa học này đã có trong giỏ hàng!!!");
      return;
    }
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item._id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const getTotalQuantity = () => {
    return cart.length;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('lỗi giỏ hàng');
  }
  return context;
};