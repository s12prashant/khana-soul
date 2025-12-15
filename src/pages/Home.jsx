import Header from '../components/Header';
import Hero from '../components/Hero';
import USP from '../components/USP';
import MenuGrid from '../components/MenuGrid';
import Story from '../components/Story';
import Seasonal from '../components/Seasonal';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <USP />
      <MenuGrid />
      <Story />
      <Seasonal />
      <Footer />
    </div>
  );
}