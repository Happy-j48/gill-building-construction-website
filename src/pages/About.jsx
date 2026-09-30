import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import Icon from '../components/Icon';
import Button from '../components/Button';
import { company, whyChooseUs } from '../data/siteData';

export default function About() {
  return <>
    <PageHero title={`About ${company.name}`} subtitle="A professional construction website concept built around the client's supplied branding, with temporary content ready to be replaced by approved company information happy." />

    <section className="section"><div className="container"><div className="two-col"><div className="two-col-image"><img src="/images/gill-brand-banner.jpg" alt="Gill Building & Construction brand" /></div><div className="two-col-content"><SectionHeader eyebrow="The Brand" title="A confident construction presence online" align="left" /><p>Gill Building &amp; Construction already has a strong visual identity. This concept turns that identity into a complete digital experience with clear navigation, strong calls to action and a project-focused presentation.</p><p>The temporary copy on this page is intentionally easy to replace. Once the client provides their story, experience, locations and services, those details can be added without changing the overall layout.</p><Button to="/contact" variant="primary">Start a Conversation</Button></div></div></div></section>

    <section className="section section--gray"><div className="container"><SectionHeader eyebrow="Why Choose Gill" title="The qualities we want the website to communicate" subtitle="These are positioning themes for the portfolio version, not claims of verified company history." /><div className="icon-cards-grid">{whyChooseUs.map((item) => <div key={item.title} className="icon-card"><div className="icon-circle"><Icon name={item.icon} size={28} /></div><h3>{item.title}</h3><p>{item.description}</p></div>)}</div></div></section>

    <section className="section"><div className="container"><div className="about-callout"><div><span className="eyebrow">Future Client Content</span><h2>Ready for the real story.</h2><p>Replace this section with the client's approved company history, director/team information, service area, licences, awards and project experience.</p></div><div className="about-callout-list"><div><Icon name="check" size={20} /><span>Company story</span></div><div><Icon name="check" size={20} /><span>Team &amp; experience</span></div><div><Icon name="check" size={20} /><span>Licences &amp; credentials</span></div><div><Icon name="check" size={20} /><span>Real project photography</span></div></div></div></div></section>

    <section className="section section--dark"><div className="container about-banner"><div><span className="eyebrow">Gill Building &amp; Construction</span><h2>Built to make the next enquiry feel easy.</h2><p>Good construction websites answer questions quickly, show real work and make contacting the business simple.</p></div><img src="/images/gill-logo-cropped.jpg" alt={company.name} /></div></section>
  </>;
}
