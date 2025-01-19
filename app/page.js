import Navbar from '../components/Navbar';
import MainSection from '../components/MainSection';
import ZakatSection from '../components/ZakatSeaction'; 
import ProductSection from '../components/ProductSection';
import OtherProjects from '../components/OtherProjects';
import DonationSection from '../components/DonationSection';
import TestimonialSection from '../components/TestimonialSection';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Navbar />
      <MainSection />
      <ZakatSection /> 
      <ProductSection />
      <OtherProjects />
      <DonationSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
