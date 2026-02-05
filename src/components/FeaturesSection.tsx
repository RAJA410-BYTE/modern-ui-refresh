import { Truck, Package, Clock, Shield } from 'lucide-react';

interface FeaturesSectionProps {
  featureImage: string;
}

const FeaturesSection = ({ featureImage }: FeaturesSectionProps) => {
  const features = [
    {
      number: '01',
      icon: Truck,
      title: 'Full Truck Load',
      description: 'Dedicated trucks for your large shipments. Ideal for bulk goods and faster transit times.',
    },
    {
      number: '02',
      icon: Package,
      title: 'Part Truck Load',
      description: 'Share truck space for smaller loads. Cost-effective solution for medium-sized shipments.',
    },
    {
      number: '03',
      icon: Clock,
      title: 'Express Delivery',
      description: 'Time-critical shipments with priority handling and expedited transit across India.',
    },
    {
      number: '04',
      icon: Shield,
      title: 'Secure Transport',
      description: 'GPS-enabled trucks with comprehensive insurance for your valuable cargo.',
    },
  ];

  return (
    <section id="services" className="relative">
      <div className="grid lg:grid-cols-2">
        {/* Image Side */}
        <div className="relative h-[400px] lg:h-auto">
          <img
            src={featureImage}
            alt="Truck transportation service"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Side */}
        <div className="bg-dark text-white py-16 lg:py-24 px-8 lg:px-16">
          <span className="section-label mb-4 block">Our Services</span>
          <h2 className="section-title text-white mb-12">
            Complete control over your truck shipments.
          </h2>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.number} className="feature-card group">
                <div className="flex items-start gap-4">
                  <span className="text-primary text-4xl font-heading font-bold opacity-30 group-hover:opacity-100 transition-opacity">
                    {feature.number}
                  </span>
                  <div>
                    <feature.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-lg font-heading font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
