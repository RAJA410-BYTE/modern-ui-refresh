import { CheckCircle, Users, Truck, MapPin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutImage from '@/assets/about-ship.jpg';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Truck, value: '150+', label: 'Trucks in Fleet' },
  { icon: MapPin, value: '28', label: 'States Covered' },
  { icon: Award, value: '10+', label: 'Years Experience' },
];

const values = [
  'Reliable & on-time delivery',
  'Transparent pricing',
  'Trained & verified drivers',
  'Real-time GPS tracking',
  '24/7 customer support',
  'Comprehensive insurance coverage',
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-[72px] bg-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="section-label mb-4 block">About Us</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Your Trusted Trucking Partner
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Delivering excellence in truck transportation across India since 2015.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImage}
                  alt="Star Logistics Operations"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-heading font-bold">10+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                A Professional Truck Transportation Company
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Star Logistics is a leading truck transportation company providing reliable 
                and efficient logistics solutions across India. With a fleet of over 150 
                well-maintained trucks and a network spanning all 28 states, we ensure 
                your goods reach their destination safely and on time.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our commitment to transparency, safety, and customer satisfaction has made 
                us the preferred choice for businesses of all sizes. From small enterprises 
                to large corporations, we handle every shipment with the same level of care 
                and professionalism.
              </p>

              {/* Values List */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/book-truck"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Truck className="w-5 h-5" />
                Book a Truck Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-primary-foreground">
                <stat.icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <div className="text-4xl font-heading font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To revolutionize the truck transportation industry in India by providing 
            technology-driven, reliable, and affordable logistics solutions. We aim to 
            be the bridge that connects businesses across the nation, enabling growth 
            and prosperity through seamless goods movement.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
