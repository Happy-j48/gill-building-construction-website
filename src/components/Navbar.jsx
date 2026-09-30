import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import { company, navLinks, serviceNavLinks } from '../data/siteData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" aria-label={company.name}>
         <img
  src="/images/gill-logo-navbar.png"
  alt={company.name}
  className="navbar-logo"
/>
        </Link>
        <div className="navbar-links">
          {navLinks.map((link) => <Link key={link.path} to={link.path} className={isActive(link.path) ? 'active' : ''}>{link.label}</Link>)}
        </div>
        <div className="navbar-cta">
          <Button to="/contact" variant="primary">Request a Quote</Button>
          <button
  type="button"
  className={`navbar-toggle${open ? ' open' : ''}`}
  onClick={() => setOpen((previous) => !previous)}
  aria-label="Toggle navigation menu"
  aria-expanded={open}
>
  <span></span>
  <span></span>
  <span></span>
</button>
        </div>
      </div>
      <div className={`navbar-mobile${open ? ' open' : ''}`}>
        {navLinks.map((link) => <Link key={link.path} to={link.path} className={isActive(link.path) ? 'active' : ''}>{link.label}</Link>)}
        <div className="mobile-services">
          <div className="mobile-services-title">Services</div>
          {serviceNavLinks.map((link) => <Link key={link.path} to={link.path} className={isActive(link.path) ? 'active' : ''}>{link.label}</Link>)}
        </div>
        <Button to="/contact" variant="primary" block>Request a Quote</Button>
      </div>
    </nav>
  );
}
