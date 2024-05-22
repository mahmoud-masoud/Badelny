import Footer from '../Components/HomePage/Footer/Footer';
import Goal from '../Components/HomePage/Goal/Goal';
import HeroSection from '../Components/HomePage/Hero/HeroSection';
import Services from '../Components/HomePage/Services/ServicesSection';
import WhyUs from '../Components/HomePage/WhyUs/WhyUs';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <WhyUs />
      <Goal />
      <Footer />
    </>
  );
};
export default Home;
