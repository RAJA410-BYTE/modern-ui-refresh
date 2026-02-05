import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Operations Head, ABC Industries',
      content: 'Star Logistics has transformed our supply chain. Their trucks are always on time and the real-time tracking gives us complete visibility.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Business Owner, Sharma Enterprises',
      content: 'We\'ve been using Star Logistics for 2 years. Their professional drivers and well-maintained trucks ensure our goods reach safely every time.',
      rating: 5,
    },
    {
      name: 'Mohammed Ali',
      role: 'Logistics Manager, XYZ Traders',
      content: 'The booking process is so simple and transparent. No hidden charges, competitive pricing, and excellent customer support.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">Testimonials</span>
          <h2 className="section-title text-foreground max-w-2xl mx-auto">
            What Our Clients Say About Us
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-heading font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
