
// import { Carousel } from "@mantine/carousel";
// import { Card, Image, Button, Badge } from "@mantine/core";
// import { IconShoppingCart } from "@tabler/icons-react";
// import { MantineProvider } from "@mantine/core";

// // Define five distinct images for the carousel
// const carouselImages = [
//   "https://i.pinimg.com/736x/4b/e5/40/4be5404d57eaaa708686e9a1ca5c84ce.jpg", // Image 1
//   "https://i.pinimg.com/736x/58/6e/e9/586ee9ceef9d597348be7e65d987d4bd.jpg", // Image 2
//   "https://i.pinimg.com/474x/f9/54/b8/f954b8518f8c09ea6e4461f06f5eec86.jpg", // Image 3
//   "https://i.pinimg.com/474x/9b/d9/52/9bd952d1bd7a81b35ee127a75f1c153a.jpg", // Image 4
//   "https://i.pinimg.com/474x/43/6b/3d/436b3ddbbb4d977df2bcb9fc277667d7.jpg", // Image 5
  
// ];

// const products = [
//   { id: 1, name: "Women's Clothes", price: "$50", img: "https://i.pinimg.com/736x/58/6e/e9/586ee9ceef9d597348be7e65d987d4bd.jpg" },
//   { id: 2, name: "Men's Clothes", price: "$60", img: "https://via.placeholder.com/300x200" },
//   { id: 3, name: "Jewellery", price: "$30", img: "https://via.placeholder.com/300x200" },
//   { id: 4, name: "Shoes", price: "$80", img: "https://via.placeholder.com/300x200" },
//   { id: 5, name: "Caps", price: "$20", img: "https://via.placeholder.com/300x200" },
//   { id: 6, name: "Workout Attire", price: "$40", img: "https://via.placeholder.com/300x200" },
//   { id: 7, name: "Jackets", price: "$70", img: "https://via.placeholder.com/300x200" },
//   { id: 8, name: "Jumpers", price: "$60", img: "https://via.placeholder.com/300x200" },
//   { id: 9, name: "Kid's clothing", price: "$60", img: "https://i.pinimg.com/474x/9b/d9/52/9bd952d1bd7a81b35ee127a75f1c153a.jpg" },
// ];

// function Home() {
//   return (
//     <div className="bg-accent min-h-screen py-8">
//       <MantineProvider>
//         {/* Carousel Section */}
//         <Carousel
//           withIndicators
//           height={400}
//           slideSize="50%"
//           slideGap="md"
//           align="center"
//           className="mb-8"
//         >
//           {carouselImages.map((img, index) => (
//             <Carousel.Slide key={index}>
//               <Image
//                 src={img}
//                 alt={`Carousel Image ${index + 1}`}
//                 className="rounded-lg shadow-md"
//               />
//             </Carousel.Slide>
//           ))}
//         </Carousel>

//         {/* Products Section */}
//         <div className="flex flex-wrap justify-center gap-6 px-8">
//           {products.map((product) => (
//             <Card
//               key={product.id}
//               shadow="sm"
//               padding="lg"
//               className="bg-white border border-secondary w-60 flex-shrink-0"
//             >
//               <Card.Section>
//                 <Image src={product.img} alt={product.name} />
//               </Card.Section>
//               <Badge color="orange" className="mt-4">
//                 {product.name}
//               </Badge>
//               <h3 className="text-primary font-semibold mt-2">{product.price}</h3>
//               <Button
//                 variant="light"
//                 color="orange"
//                 fullWidth
//                 className="mt-4 bg-action text-white"
//                 leftIcon={<IconShoppingCart />}
//               >
//                 Add to Cart
//               </Button>
//             </Card>
//           ))}
//         </div>
//       </MantineProvider>
//     </div>
//   );
// }

// export default Home;

















import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from "@mantine/carousel";
import { Card, Image, Button, Badge } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { MantineProvider } from "@mantine/core";

// Define five distinct images for the carousel
const carouselImages = [
  "https://i.pinimg.com/736x/4b/e5/40/4be5404d57eaaa708686e9a1ca5c84ce.jpg", // Image 1
  "https://i.pinimg.com/736x/58/6e/e9/586ee9ceef9d597348be7e65d987d4bd.jpg", // Image 2
  "https://i.pinimg.com/474x/f9/54/b8/f954b8518f8c09ea6e4461f06f5eec86.jpg", // Image 3
  "https://i.pinimg.com/474x/9b/d9/52/9bd952d1bd7a81b35ee127a75f1c153a.jpg", // Image 4
  "https://i.pinimg.com/474x/43/6b/3d/436b3ddbbb4d977df2bcb9fc277667d7.jpg", // Image 5
];

const products = [
  { id: 1, name: "Women's Clothes", price: "$50", img: "https://i.pinimg.com/736x/58/6e/e9/586ee9ceef9d597348be7e65d987d4bd.jpg" },
  { id: 2, name: "Men's Clothes", price: "$60", img: "https://via.placeholder.com/300x200" },
  { id: 3, name: "Jewellery", price: "$30", img: "https://via.placeholder.com/300x200" },
  { id: 4, name: "Shoes", price: "$80", img: "https://via.placeholder.com/300x200" },
  { id: 5, name: "Caps", price: "$20", img: "https://via.placeholder.com/300x200" },
  { id: 6, name: "Workout Attire", price: "$40", img: "https://via.placeholder.com/300x200" },
  { id: 7, name: "Jackets", price: "$70", img: "https://via.placeholder.com/300x200" },
  { id: 8, name: "Jumpers", price: "$60", img: "https://via.placeholder.com/300x200" },
  { id: 9, name: "Kid's clothing", price: "$60", img: "https://i.pinimg.com/474x/9b/d9/52/9bd952d1bd7a81b35ee127a75f1c153a.jpg" },
];

function Home() {
   const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div className="bg-accent min-h-screen py-8">
      <MantineProvider>
        {/* Carousel Section */}
        <Carousel
          withIndicators
          height={400}
          slideSize="50%"
          slideGap="md"
          align="center"
          className="mb-8"
          loop
          autoplay={{ delay: 3000 }} // Add autoplay with a 3-second delay
        >
          {carouselImages.map((img, index) => (
            <Carousel.Slide key={index}>
              <Image
                src={img}
                alt={`Carousel Image ${index + 1}`}
                className="rounded-lg shadow-md"
              />
            </Carousel.Slide>
          ))}
        </Carousel>

        {/* Products Section */}
        <div className="flex flex-wrap justify-center gap-6 px-8">
          {products.map((product) => (
            <Card
              key={product.id}
              shadow="sm"
              padding="lg"
              className="bg-white border border-secondary w-60 flex-shrink-0"
            >
              <Card.Section>
                <Image src={product.img} alt={product.name} />
              </Card.Section>
              <Badge color="orange" className="mt-4">
                {product.name}
              </Badge>
              <h3 className="text-primary font-semibold mt-2">{product.price}</h3>
              <Button
                variant="light"
                color="orange"
                fullWidth
                className="mt-4 bg-action text-white"
                leftIcon={<IconShoppingCart />}
              >
                Add to Cart
              </Button>
            </Card>
          ))}
        </div>
      </MantineProvider>
    </div>
  );
}

export default Home;
