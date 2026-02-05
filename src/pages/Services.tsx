import { Truck, Package, Clock, Shield, MapPin, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
  {
    icon: Truck,
    title: 'Full Truck Load (FTL)',
    description: 'Dedicated trucks for your large shipments. Ideal for bulk goods requiring the entire truck capacity.',
    features: ['Dedicated vehicle', 'Faster transit', 'Direct delivery', 'Cost-effective for bulk'],
  },
  {
    icon: Package,
    title: 'Part Truck Load (PTL)',
    description: 'Share truck space with other shipments. Perfect for smaller loads at economical rates.',
    features: ['Shared capacity', 'Lower costs', 'Regular schedules', 'Multiple pickup points'],
  },
  {
    icon: Clock,
    title: 'Express Delivery',
    description: 'Time-critical shipments delivered with priority handling and expedited transit.',
    features: ['Same-day options', 'Priority handling', 'Real-time tracking', 'Guaranteed timelines'],
  },
  {
    icon: Shield,
    title: 'Secure Transport',
    description: 'High-value and sensitive goods transported with enhanced security measures.',
    features: ['GPS tracking', 'Secure locks', 'Insurance coverage', 'Trained handlers'],
  },
  {
    icon: MapPin,
    title: 'Interstate Logistics',
    description: 'Pan-India coverage connecting all major cities and industrial hubs.',
    features: ['All-India network', 'Hub connectivity', 'Border compliance', 'Efficient routing'],
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for all your logistics queries and tracking.',
    features: ['Live tracking', 'Dedicated manager', 'Issue resolution', 'Booking assistance'],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-[72px] bg-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="section-label mb-4 block">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Truck Transportation Services
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive trucking solutions for businesses of all sizes. 
            From local deliveries to pan-India logistics.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Transport Your Goods?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Book a truck now and experience hassle-free logistics with Star Logistics.
          </p>
          <Link
            to="/book-truck"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            <Truck className="w-5 h-5" />
            Book a Truck Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
