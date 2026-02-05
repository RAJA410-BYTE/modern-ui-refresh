import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'Book Truck', href: '/book-truck' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const services = [
    'Full Truck Load',
    'Part Truck Load',
    'Express Delivery',
    'Interstate Logistics',
    'Secure Transport',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-dark-soft text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-1 mb-6">
              <span className="text-2xl font-heading font-bold">STAR LOGISTICS</span>
              <span className="text-primary text-3xl font-bold">.</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              Your trusted partner in truck transportation. We deliver goods 
              safely and efficiently across India with our modern fleet.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white/60 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Get a Quote</h3>
            <p className="text-white/60 mb-4">
              Need a truck? Contact us for instant quotes.
            </p>
            <Link
              to="/book-truck"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all mb-6"
            >
              Book a Truck
            </Link>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>123 Transport Hub, Guwahati, Assam</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+91 7002066616</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>info@starlogistics.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2026 Star Logistics. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
