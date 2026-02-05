import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import CTAStrip from '@/components/CTAStrip';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

// Import images
import heroImage from '@/assets/hero-logistics.jpg';
import aboutImage from '@/assets/about-ship.jpg';
import featureImage from '@/assets/feature-delivery.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero heroImage={heroImage} />
      <AboutSection aboutImage={aboutImage} />
      <FeaturesSection featureImage={featureImage} />
      <CTAStrip />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
