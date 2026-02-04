import { useState, useEffect } from 'react';
import { Phone, Menu, X, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    label: 'Home',
    href: '#'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'Services',
    href: '#services'
  }, {
    label: 'Blog',
    href: '#blog'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  const socialLinks = [{
    icon: Facebook,
    href: '#'
  }, {
    icon: Twitter,
    href: '#'
  }, {
    icon: Linkedin,
    href: '#'
  }, {
    icon: Instagram,
    href: '#'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-lg' : 'bg-background/80 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 bg-dark px-5 py-3 -ml-4">
            <span className="text-xl font-heading font-bold text-white tracking-tight">Star Logistics</span>
            <span className="text-primary text-2xl font-bold">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>)}
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => <a key={index} href={social.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  <social.icon className="w-4 h-4" />
                </a>)}
            </div>

            {/* Contact Button */}
            <a href="tel:+1234567890" className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-semibold text-sm transition-all hover:shadow-[var(--shadow-button)] hover:-translate-y-0.5">
              <Phone className="w-4 h-4" />
              <span>+91 7002066616</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="lg:hidden py-4 border-t border-border animate-fade-up">
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.label} href={link.href} className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>)}
            </nav>
            <div className="mt-4 pt-4 border-t border-border">
              <a href="tel:+1234567890" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-semibold text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 234 567 890</span>
              </a>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;