import { Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTAStrip = () => {
  return (
    <section className="bg-gradient-primary py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
              Need a Truck? Book Now!
            </h2>
            <p className="text-white/80 text-lg">
              Get instant quotes and book your truck in minutes.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/book-truck"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <Truck className="w-5 h-5" />
              Book a Truck
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+917002066616"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-white hover:text-primary"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAStrip;
