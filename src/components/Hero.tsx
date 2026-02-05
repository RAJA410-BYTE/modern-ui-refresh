import { ArrowRight, ChevronRight, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
interface HeroProps {
  heroImage: string;
}
const Hero = ({
  heroImage
}: HeroProps) => {
  return <section className="relative min-h-[85vh] flex items-center pt-[72px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Truck transportation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 text-sm mb-6 animate-fade-up" style={{
          animationDelay: '0.1s'
        }}>
            <span>TRUCK TRANSPORTATION</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary">PAN INDIA</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6 opacity-0 animate-fade-up text-primary-foreground lg:text-6xl" style={{
          animationDelay: '0.2s'
        }}>Star Logistics.

          <span className="block text-primary">Transportation</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl opacity-0 animate-fade-up" style={{
          animationDelay: '0.4s'
        }}>
            Move your goods safely and efficiently across India. 
            Book a truck in minutes with real-time tracking and competitive pricing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up" style={{
          animationDelay: '0.6s'
        }}>
            <Link to="/book-truck" className="btn-primary group">
              <Truck className="w-5 h-5 mr-2" />
              <span>Book a Truck</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/fleet" className="btn-outline-white">
              View Our Fleet
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-float" />
        </div>
      </div>
    </section>;
};
export default Hero;