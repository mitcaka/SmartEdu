import { useCart } from "@/app/context/CartContext";
import { styles } from "@/app/styles/style";
import { formatCurrency } from "@/app/utils/Format";
import React from "react";
import { HiTrash } from "react-icons/hi";

const Cart: React.FC = () => {
  const { cart, removeFromCart, getTotalPrice, getTotalQuantity } = useCart();
  return (
    <div className="p-4 max-w-6xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Giỏ Hàng</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Giỏ hàng của bạn trống.</p>
      ) : (
        <>
          <ul className="mb-4 divide-y divide-gray-300">
            {cart.map((item) => (
              <li key={item._id} className="flex items-center py-2">
                <img
                  src={item.thumbnail.url}
                  alt={item.name}
                  className="w-24 h-16 object-cover rounded mr-2"
                />
                <span className="flex-1">{item.name}</span>
                <span className="text-right">
                  1 x {formatCurrency(item.price)}
                </span>
                <button
                  className="text-red-500 hover:text-red-700 ml-2"
                  onClick={() => removeFromCart(item._id)}
                >
                  <HiTrash size={20} />
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold">
            <span>Tổng số lượng:</span>
            <span>{getTotalQuantity()}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Tổng giá:</span>
            <span>{formatCurrency(getTotalPrice())}</span>
          </div>
          <div
            className={`${styles.button} !w-[180px] mx-6 font-Poppins cursor-pointer !bg-[crimson] text-center`}
          >
            Mua ngay
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
