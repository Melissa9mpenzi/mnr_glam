import { Carousel as MantineCarousel } from '@mantine/carousel';
import { MantineProvider } from '@mantine/core';


const Carousel = () => {
  return (
    < MantineProvider>
    <MantineCarousel loop>
      <MantineCarousel.Slide>
        <img src="/images/item1.jpg" alt="Item 1" />
      </MantineCarousel.Slide>
      <MantineCarousel.Slide>
        <img src="/images/item2.jpg" alt="Item 2" />
      </MantineCarousel.Slide>
      <MantineCarousel.Slide>
        <img src="/images/item3.jpg" alt="Item 3" />
      </MantineCarousel.Slide>
    </MantineCarousel>
    </MantineProvider>
  );
};

export default Carousel;
