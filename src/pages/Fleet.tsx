import { Truck, Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const truckTypes = [
  {
    name: 'Mini Truck',
    capacity: '1-2 Tons',
    dimensions: '7ft x 4ft x 4ft',
    pricePerKm: 15,
    idealFor: 'Small furniture, appliances, local moves',
    image: '🚐',
  },
  {
    name: 'Pickup Truck',
    capacity: '2-4 Tons',
    dimensions: '9ft x 5ft x 5ft',
    pricePerKm: 20,
    idealFor: 'Medium-sized shipments, office equipment',
    image: '🛻',
  },
  {
    name: 'Medium Truck',
    capacity: '4-8 Tons',
    dimensions: '14ft x 6ft x 6ft',
    pricePerKm: 30,
    idealFor: 'Commercial goods, bulk orders, machinery',
    image: '🚚',
  },
  {
    name: 'Heavy Truck',
    capacity: '8-16 Tons',
    dimensions: '20ft x 7ft x 7ft',
    pricePerKm: 45,
    idealFor: 'Industrial equipment, large-scale logistics',
    image: '🚛',
  },
  {
    name: 'Trailer Truck',
    capacity: '16+ Tons',
    dimensions: '32ft x 8ft x 8ft',
    pricePerKm: 60,
    idealFor: 'Heavy machinery, construction materials, containers',
    image: '🚜',
  },
];

const Fleet = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-[72px] bg-gradient-to-r from-dark to-dark-soft text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="section-label mb-4 block">Our Fleet</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Choose the Right Truck
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We have a wide range of trucks to meet your transportation needs. 
            From mini trucks for local moves to heavy trailers for industrial logistics.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {truckTypes.map((truck, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Truck Visual */}
                <div className="bg-muted h-40 flex items-center justify-center">
                  <span className="text-7xl">{truck.image}</span>
                </div>

                {/* Truck Details */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {truck.name}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span className="font-semibold text-foreground">{truck.capacity}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Dimensions:</span>
                      <span className="font-semibold text-foreground">{truck.dimensions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-semibold text-primary">₹{truck.pricePerKm}/km</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Ideal for:</strong> {truck.idealFor}
                    </p>
                    <Link
                      to="/book-truck"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      Book This Truck
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Why Choose Our Fleet?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Well Maintained', desc: 'Regular servicing and inspections' },
              { icon: Package, title: 'GPS Enabled', desc: 'Real-time tracking for all vehicles' },
              { icon: Truck, title: 'Trained Drivers', desc: 'Experienced and verified drivers' },
              { icon: Package, title: 'Insured', desc: 'Comprehensive cargo insurance' },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fleet;
