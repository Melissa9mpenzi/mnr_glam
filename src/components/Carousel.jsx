import  { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { Card, Image, Button, Badge } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { MantineProvider } from "@mantine/core";
import Autoplay from 'embla-carousel-autoplay';

// Define five distinct images for the carousel
const carouselImages = [
  "https://i.pinimg.com/736x/4b/e5/40/4be5404d57eaaa708686e9a1ca5c84ce.jpg",
  "https://i.pinimg.com/736x/58/6e/e9/586ee9ceef9d597348be7e65d987d4bd.jpg",
  "https://i.pinimg.com/474x/f9/54/b8/f954b8518f8c09ea6e4461f06f5eec86.jpg",
  "https://i.pinimg.com/474x/9b/d9/52/9bd952d1bd7a81b35ee127a75f1c153a.jpg",
  "https://i.pinimg.com/474x/43/6b/3d/436b3ddbbb4d977df2bcb9fc277667d7.jpg",
];

const products = [
  { id: 1, name: "Women's Clothes", price: "$50", img: "https://i.pinimg.com/736x/58/6e/e9/586ee9ceef9d597348be7e65d987d4bd.jpg" },
  { id: 2, name: "Men's Clothes", price: "$60", img: "https://i.pinimg.com/474x/2c/16/f5/2c16f5f5ec357efb337950bc3bd9c702.jpg" },
  { id: 3, name: "Jewellery", price: "$30", img: "https://i.pinimg.com/474x/28/11/b1/2811b1359f8274024d64f5f296fdff9b.jpg" },
  { id: 4, name: "Shoes", price: "$80", img: "https://i.pinimg.com/474x/9b/df/3e/9bdf3e04f3d0e1092725c5c585f16f79.jpg" },
  { id: 5, name: "Caps", price: "$20", img: "https://i.pinimg.com/474x/ac/41/0f/ac410f73d79e25b226a3d071ad1b2a1a.jpg" },
  { id: 6, name: "Workout Attire", price: "$40", img: "https://i.pinimg.com/474x/0b/bc/f5/0bbcf57321c2fb75553f38d8986a6cf2.jpg" },
  { id: 7, name: "Jackets", price: "$70", img: "https://i.pinimg.com/474x/07/d3/cc/07d3ccf1a150082ceac42a0ba3b13963.jpg" },
  { id: 8, name: "Jumpers", price: "$60", img: "https://i.pinimg.com/474x/30/ee/6d/30ee6d1406e9ea760552d296f14b7ef0.jpg" },
  { id: 9, name: "Kid's clothing", price: "$60", img: "https://i.pinimg.com/474x/9b/d9/52/9bd952d1bd7a81b35ee127a75f1c153a.jpg" },
  { id: 10, name: "Sun glasses", price: "$60", img: "https://i.pinimg.com/474x/38/7b/d2/387bd2c2866ba0d8e02d89e21fcb9e07.jpg" },
  { id: 11, name: "Swim wear", price: "$60", img: "https://i.pinimg.com/474x/c0/f2/a7/c0f2a7f38c44df49f37ab384133913f9.jpg"},
  { id: 12, name: "Ladies' bags", price: "$60", img: "https://i.pinimg.com/474x/61/41/bc/6141bc73844331f38875094b1cf6968e.jpg" },
];

function Home() {
  // Create a ref for the autoplay plugin
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
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
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
              className="bg-white border border-secondary w-60 h-100 flex-shrink-0"
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