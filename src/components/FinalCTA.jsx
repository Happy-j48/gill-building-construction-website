import Button from './Button';
import { company } from '../data/siteData';
export default function FinalCTA({ title = 'Let’s talk about your next building project', subtitle = 'Tell us what you are planning and use this demo form to show how a future client enquiry can work.' }) {
  return <section className="final-cta"><div className="container"><div className="final-cta-content"><span className="cta-label">Start a conversation</span><h2>{title}</h2><p>{subtitle}</p><div className="cta-actions"><Button to="/contact" variant="primary" size="lg">Request a Quote</Button>{company.phoneHref !== '#' && <Button href={company.phoneHref} variant="outline-light" size="lg">Call Us</Button>}</div></div></div></section>;
}
