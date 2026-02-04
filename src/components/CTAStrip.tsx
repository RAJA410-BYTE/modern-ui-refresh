import { ArrowRight } from 'lucide-react';

const CTAStrip = () => {
  return (
    <section className="bg-gradient-primary py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
              Need Help? Get Free Quote!
            </h2>
            <p className="text-white/80 text-lg">
              Contact us today for a personalized logistics solution tailored to your needs.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAStrip;
