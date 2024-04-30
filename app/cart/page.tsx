
"use client";
import { useState } from "react";


const CartPage = () => {
  

  // Sample cart data
  const [cart, setCart] = useState([
    { id: 1, name: "Product 1", quantity: 2, price: 10 },
    { id: 2, name: "Product 2", quantity: 1, price: 15 },
  ]);

  // Function to update quantity
  const updateQuantity = (productId :number, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  // Function to remove item from cart
  const removeFromCart = (productId :number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {cart.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty</p>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b border-gray-200 py-2"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                  >
                    +
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className={`${
                      item.quantity === 1 ? "bg-gray-200" : "bg-blue-500"
                    } text-white px-3 py-1 rounded-md mr-2`}
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="font-semibold">Total Price: ${calculateTotalPrice()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
