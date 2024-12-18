import  { useState } from "react";
import { Button, TextInput, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

const Cart = () => {
  const [promoCode, setPromoCode] = useState("");
  const [cart] = useState([
    {
      id: 1,
      name: "Plaid Shirt & Buttoned Skirt Set",
      color: "Olive/Multi",
      size: "S",
      price: 39.99,
      quantity: 1,
      image: "https://via.placeholder.com/100x150",
    },
  ]);

  // Total Calculation
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 lg:p-10 font-sans bg-white">
      <MantineProvider>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-brownDark mb-6">🛒 My Cart</h1>

        {/* Flex Container */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Cart Items Section */}
          <div className="flex-1 bg-gray-50 p-6 rounded shadow">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b border-brownLight pb-4 mb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-auto rounded-lg border"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold text-brownDark">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Color: {item.color} | Size: {item.size}
                  </p>
                  <p className="text-sm text-bronze">
                    Each: ${item.price.toFixed(2)}
                  </p>
                </div>
                <div>
                  <select
                    className="border p-2 rounded focus:outline-none"
                    defaultValue={item.quantity}
                  >
                    {[1, 2, 3, 4, 5].map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded shadow">
            <h2 className="text-xl font-semibold text-brownDark mb-4">
              Order Summary
            </h2>
            <Divider className="mb-4" />
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Shipping</span>
              <span>TBD</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Tax</span>
              <span>TBD</span>
            </div>
            <Divider className="my-2" />
            <div className="flex justify-between text-lg font-bold text-redDark">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* Promo Code */}
            <TextInput
              placeholder="Enter Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="mt-4 mb-2"
            />
            <Button
              variant="outline"
              color="brownDark"
              fullWidth
              onClick={() => alert("Promo Code Applied!")}
            >
              Submit
            </Button>

            <p className="text-sm text-redDark mt-4">
              You are $10.01 away from free shipping!
            </p>

            {/* Checkout */}
            <Button
              component={Link}
              to="/checkout"
              className="bg-redDark hover:bg-brownDark text-white mt-4"
              fullWidth
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
      </MantineProvider>
    </div>
  );
};

export default Cart;
