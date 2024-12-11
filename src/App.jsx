import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import DeliveryOptions from './pages/DeliveryOptions';
import Deals from './pages/Deals';
import Terms from './pages/Terms';
import HelpCentre from './pages/HelpCentre';
import Survey from './pages/Survey';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import CheckoutPage from './pages/CheckoutPage';


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<DeliveryOptions />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/help-center" element={<HelpCentre />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
      <Footer /> 
    </div>
  );
};

export default App;
