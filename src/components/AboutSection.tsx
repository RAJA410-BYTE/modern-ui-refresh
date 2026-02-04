import { CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  aboutImage: string;
}

const AboutSection = ({ aboutImage }: AboutSectionProps) => {
  const features = [
    'Worldwide shipping coverage',
    'Real-time tracking system',
    '24/7 customer support',
    'Secure & insured delivery',
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <img
                src={aboutImage}
                alt="Container ship at sea"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
              <div className="text-5xl font-heading font-bold">25+</div>
              <div className="text-sm mt-1 opacity-90">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-label mb-4 block">About Us</span>
            <h2 className="section-title text-foreground mb-6">
              A professional transportation & logistics company
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We are a global logistics company providing innovative transport solutions 
              for businesses of all sizes. With over 25 years of industry experience, 
              we've built a reputation for reliability, efficiency, and exceptional 
              customer service across the globe.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a href="#services" className="btn-primary">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
