import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Deals', href: '#deals' },
    { name: 'Kids', href: '#kids' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon">K</div>
          <div className="nav-logo-text">
            KASI'S <span>CHICKEN</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links-desktop">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="nav-cta-desktop">
          <a href="tel:+447782761970" className="btn btn-primary btn-small">
            <Phone size={16} /> Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="nav-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links-mobile">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href="tel:+447782761970" className="btn btn-primary">
              <Phone size={18} /> Call & Order
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
