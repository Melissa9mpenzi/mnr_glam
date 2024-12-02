const Categories = () => {
  const categories = [
    "Ladies' Clothing",
    "Gents' Clothing",
    "Shoes",
    "Jumpers",
    "Swimwear",
    "Workout Attire",
    "Jewelry",
    "Caps",
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Categories</h1>
      <ul className="mt-4 grid grid-cols-2 gap-4">
        {categories.map((category, index) => (
          <li
            key={index}
            className="border p-4 rounded shadow hover:bg-gray-100 transition"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
