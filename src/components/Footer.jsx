import { Link } from 'react-router-dom';
import Icon from './Icon';
import { company, navLinks, serviceNavLinks, serviceAreas } from '../data/siteData';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link"><img src="/images/gill-logo-navbar.png" alt={company.name} className="footer-logo" /></Link>
            <p>{company.tagline} This portfolio concept can be updated with the client's approved company story, projects and contact details.</p>
            <div className="footer-social">{company.social.map((s) => <a key={s.label} href={s.href} aria-label={s.label}>{s.label[0]}</a>)}</div>
          </div>
          <div className="footer-col"><h4>Company</h4><ul>{navLinks.slice(1).map((link) => <li key={link.path}><Link to={link.path}>{link.label}</Link></li>)}</ul></div>
          <div className="footer-col"><h4>Services</h4><ul>{serviceNavLinks.map((link) => <li key={link.path}><Link to={link.path}>{link.label}</Link></li>)}</ul></div>
          <div className="footer-col"><h4>Contact</h4>
            <div className="footer-contact-item"><Icon name="phone" size={18} /><span>{company.phone}</span></div>
            <div className="footer-contact-item"><Icon name="mail" size={18} /><span>{company.email}</span></div>
            <div className="footer-contact-item"><Icon name="pin" size={18} /><span>{company.address}</span></div>
            <div className="footer-contact-item"><Icon name="clock" size={18} /><span>{company.hours}</span></div>
          </div>
        </div>
        <div className="footer-areas">{serviceAreas.map((area) => <span key={area}>{area}</span>)}</div>
        <div className="footer-bottom"><p>&copy; {year} {company.name}. Concept website — replace placeholder business details before publishing.</p><div className="footer-bottom-links"><a href="#">Privacy Policy</a><a href="#">Terms</a></div></div>
      </div>
    </footer>
  );
}
