import Navbar from '../components/Navbar';
import MainSection from '../components/MainSection';
import ZakatSection from '../components/ZakatSeaction'; 
import ProductSection from '../components/ProductSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <MainSection />
      <ZakatSection /> 
      <ProductSection />
    </div>
  );
}
