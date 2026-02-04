import { ArrowRight, ChevronRight } from 'lucide-react';

interface HeroProps {
  heroImage: string;
}

const Hero = ({ heroImage }: HeroProps) => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-[72px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Logistics transportation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 text-sm mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <a href="#" className="hover:text-white transition-colors">HOME</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary">ABOUT</span>
          </div>

          {/* Title */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Global Logistics
            <span className="block text-primary">Solutions</span>
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-white/80 mb-8 max-w-xl opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            Delivering excellence in transportation and logistics. 
            We connect businesses worldwide with reliable, efficient shipping solutions.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            <a href="#services" className="btn-primary group">
              <span>Our Services</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-outline-white">
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
