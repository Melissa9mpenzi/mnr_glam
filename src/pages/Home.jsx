import { Carousel } from "@mantine/carousel";
import { Card, Image, Button, Badge } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { MantineProvider } from "@mantine/core";

  const products = [
  { id: 1, name: "Women's Clothes", price: "$50", img: "https://via.placeholder.com/300x200" },
  { id: 2, name: "Men's Clothes", price: "$60", img: "https://via.placeholder.com/300x200" },
  { id: 3, name: "Jewellery", price: "$30", img: "https://via.placeholder.com/300x200" },
  { id: 4, name: "Shoes", price: "$80", img: "https://via.placeholder.com/300x200" },
  { id: 5, name: "Caps", price: "$20", img: "https://via.placeholder.com/300x200" },
  { id: 6, name: "Workout Attire", price: "$40", img: "https://via.placeholder.com/300x200" },
  { id: 7, name: "Jackets", price: "$70", img: "https://via.placeholder.com/300x200" },
  { id: 8, name: "Jumpers", price: "$60", img: "https://via.placeholder.com/300x200" },
];

function Home() {
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
      >
        {products.slice(0, 5).map((product) => (
          <Carousel.Slide key={product.id}>
            <Image
              src={product.img}
              alt={product.name}
              className="rounded-lg shadow-md"
            />
          </Carousel.Slide>
        ))}
      </Carousel>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
        {products.map((product) => (
          <Card
            key={product.id}
            shadow="sm"
            padding="lg"
            className="bg-white border border-secondary"
          >
            <Card.Section>
              <Image src={product.img} alt={product.name} />
            </Card.Section>
            <Badge color="orange" className="mt-4">{product.name}</Badge>
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
