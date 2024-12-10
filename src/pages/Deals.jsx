// const Deals = () => {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold">Deals & Promotions</h1>
//       <p className="mt-4">Check out our latest deals and save big on your favorite items!</p>
//     </div>
//   );
// };

// export default Deals;









import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Card, Image, Text, Button, Badge, Grid } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

// Sample Deals Data
const deals = [
  {
    id: 1,
    title: 'Green Bikini',
    category: 'Swimwear',
    discount: 40,
    image: 'https://images.pexels.com/photos/1105353/pexels-photo-1105353.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 29.99,
  },
  {
    id: 2,
    title: 'Black Workout Attire',
    category: 'Workout Attire',
    discount: 25,
    image: 'https://via.placeholder.com/300x200?text=Workout+Attire',
    price: 19.99,
  },
  {
    id: 3,
    title: 'Elegant Necklace',
    category: 'Jewellery',
    discount: 50,
    image: 'https://via.placeholder.com/300x200?text=Elegant+Necklace',
    price: 49.99,
  },
  {
    id: 4,
    title: 'Red High Heels',
    category: 'Shoes',
    discount: 30,
    image: 'https://via.placeholder.com/300x200?text=Red+High+Heels',
    price: 69.99,
  },
  {
    id: 5,
    title: 'Men’s Casual Jumper',
    category: 'Jumpers',
    discount: 35,
    image: 'https://via.placeholder.com/300x200?text=Mens+Casual+Jumper',
    price: 39.99,
  },
  {
    id: 6,
    title: 'Blue Running Shoes',
    category: 'Workout Attire',
    discount: 20,
    image: 'https://via.placeholder.com/300x200?text=Blue+Running+Shoes',
    price: 59.99,
  },
  {
    id: 7,
    title: 'Leather Cap',
    category: 'Caps',
    discount: 15,
    image: 'https://via.placeholder.com/300x200?text=Leather+Cap',
    price: 14.99,
  },
  {
    id: 8,
    title: 'Summer Hat',
    category: 'Caps',
    discount: 10,
    image: 'https://via.placeholder.com/300x200?text=Summer+Hat',
    price: 9.99,
  },
  {
    id: 9,
    title: 'Women’s Summer Dress',
    category: 'Women\'s Clothes',
    discount: 45,
    image: 'https://via.placeholder.com/300x200?text=Summer+Dress',
    price: 49.99,
  },
  {
    id: 10,
    title: 'Men’s Formal Shirt',
    category: 'Men\'s Clothes',
    discount: 20,
    image: 'https://via.placeholder.com/300x200?text=Formal+Shirt',
    price: 39.99,
  },
  {
    id: 11,
    title: 'Golden Earrings',
    category: 'Jewellery',
    discount: 30,
    image: 'https://via.placeholder.com/300x200?text=Golden+Earrings',
    price: 29.99,
  },
  {
    id: 12,
    title: 'Black Swim Trunks',
    category: 'Swimwear',
    discount: 25,
    image: 'https://via.placeholder.com/300x200?text=Black+Swim+Trunks',
    price: 19.99,
  },
];

function Deals() {
  return (
    
    
    <div style={{ padding: '20px' }}>
      <MantineProvider>
      <h1>Deals Page</h1>

      {/* Carousel Section */}
      <Carousel slideSize="25%" slideGap="md" loop align="start" mb="xl">
        {deals.slice(0, 6).map((deal) => (
          <Carousel.Slide key={deal.id}>
            <Card shadow="sm" p="lg" style={{ height: '100%' }}>
              <Card.Section>
                <Image src={deal.image} alt={deal.title} />
              </Card.Section>
              <Text weight={500} size="lg" mt="md">
                {deal.title}
              </Text>
              <Badge color="green" variant="light">
                {deal.discount}% OFF
              </Badge>
              <Text size="sm" color="dimmed">
                {deal.category}
              </Text>
              <Text size="xl" mt="md" color="blue">
                ${deal.price.toFixed(2)}
              </Text>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>

      {/* Deals Cards Section */}
      <Grid>
        {deals.map((deal) => (
          <Grid.Col span={4} key={deal.id}>
            <Card shadow="sm" p="lg">
              <Card.Section>
                <Image src={deal.image} alt={deal.title} />
              </Card.Section>
              <Text weight={500} size="lg" mt="md">
                {deal.title}
              </Text>
              <Badge color="green" variant="light">
                {deal.discount}% OFF
              </Badge>
              <Text size="sm" color="dimmed">
                {deal.category}
              </Text>
              <Text size="xl" mt="md" color="blue">
                ${deal.price.toFixed(2)}
              </Text>
              <Button
                variant="outline"
                color="blue"
                fullWidth
                mt="md"
                onClick={() => alert(`Added ${deal.title} to cart!`)}
              >
                Add to Cart
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </MantineProvider>
    </div>
  );
}

export default Deals;