import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import FeatureList from '../components/FeatureList';
import FinalCTA from '../components/FinalCTA';
import Button from '../components/Button';
import Icon from '../components/Icon';

export default function CommercialConstruction() {
  return <>
    <PageHero title="Commercial Construction" subtitle="A professional commercial project page for offices, retail, property improvements and other business-focused building work." />
    <section className="section"><div className="container"><div className="two-col"><div className="two-col-content"><SectionHeader eyebrow="Commercial Projects" title="Professional spaces built for purpose" align="left" /><p>This concept page gives the client a place to explain their commercial capabilities, preferred project types and approach to working around business needs.</p><p>Replace the temporary copy with the client's actual experience, sectors, project size and service area.</p><Button to="/contact" variant="primary">Discuss a Commercial Project</Button></div><div className="two-col-image"><img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85" alt="Modern commercial property" /></div></div></div></section>
    <section className="section section--gray"><div className="container"><SectionHeader eyebrow="Commercial Focus" title="A strong structure for future case studies" /><div className="values-grid"><div className="icon-card"><div className="icon-circle"><Icon name="building" size={28} /></div><h3>Commercial Spaces</h3><p>Showcase offices, retail spaces, developments or other approved project categories.</p></div><div className="icon-card"><div className="icon-circle"><Icon name="folder" size={28} /></div><h3>Project Coordination</h3><p>Explain how the team coordinates trades, timelines and project requirements.</p></div><div className="icon-card"><div className="icon-circle"><Icon name="shield" size={28} /></div><h3>Professional Delivery</h3><p>Use real credentials, safety information and project outcomes when supplied.</p></div></div></div></section>
    <section className="section"><div className="container"><div className="two-col"><div className="two-col-image"><img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85" alt="Commercial construction site" /></div><div className="two-col-content"><SectionHeader eyebrow="Future Content" title="Ready for real commercial project details" align="left" /><FeatureList items={['Approved commercial services','Project sectors and sizes','Case studies and outcomes','Real construction photography','Client-approved credentials']} /></div></div></div></section>
    <FinalCTA title="Have a commercial project in mind?" subtitle="Use this page as the foundation for the client's real commercial service offering." />
  </>;
}
