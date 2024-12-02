import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <Carousel />
      <section className="p-8">
        <h1 className="text-2xl font-bold">Welcome to M&R Glam!</h1>
        <p>Your one-stop shop for fashion needs.</p>
      </section>
    </div>
  );
};

export default Home;
