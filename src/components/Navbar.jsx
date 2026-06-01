import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (!mobileMenuOpen) {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY, mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      setIsVisible(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Menu', to: '/menu' },
    { name: 'Deals', to: '/deals' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${!isVisible ? 'navbar-hidden' : ''}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="Kasi's Chicken Logo" className="logo-img" />
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links-desktop">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="nav-cta-desktop">
          <a href="tel:07909045300" className="btn btn-primary nav-btn">
            Order Now
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
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav-link-mobile ${isActive ? 'nav-link-active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <a href="tel:07909045300" className="btn btn-primary">
              <Phone size={18} /> Call & Order
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
