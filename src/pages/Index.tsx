import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import CTAStrip from '@/components/CTAStrip';
import Testimonials from '@/components/Testimonials';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

// Import images
import heroImage from '@/assets/hero-logistics.jpg';
import aboutImage from '@/assets/about-ship.jpg';
import featureImage from '@/assets/feature-delivery.jpg';
import blogWarehouse from '@/assets/blog-warehouse.jpg';
import blogAi from '@/assets/blog-ai.jpg';
import blogTrends from '@/assets/blog-trends.jpg';

const Index = () => {
  const blogImages = [blogWarehouse, blogAi, blogTrends];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero heroImage={heroImage} />
      <AboutSection aboutImage={aboutImage} />
      <FeaturesSection featureImage={featureImage} />
      <CTAStrip />
      <Testimonials />
      <BlogSection blogImages={blogImages} />
      <Footer />
    </div>
  );
};

export default Index;
