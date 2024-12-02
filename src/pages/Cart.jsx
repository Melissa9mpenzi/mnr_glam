const Cart = () => {
  const items = [
    { name: "Ladies' Top", price: 20 },
    { name: "Men's Shoes", price: 50 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      <ul className="mt-4 space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
