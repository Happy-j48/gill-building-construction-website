import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import FeatureList from '../components/FeatureList';
import FinalCTA from '../components/FinalCTA';
import Button from '../components/Button';
import Icon from '../components/Icon';

export default function ResidentialConstruction() {
  return <>
    <PageHero title="Residential Construction" subtitle="A polished residential construction service page ready for the client's actual home-building services, process and project examples." />
    <section className="section"><div className="container"><div className="two-col"><div className="two-col-image"><img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=85" alt="Modern residential construction" /></div><div className="two-col-content"><SectionHeader eyebrow="Residential Builds" title="Homes designed around the way people live" align="left" /><p>This portfolio version positions Gill Building &amp; Construction for modern residential projects, from new homes through to carefully planned improvements.</p><p>The wording, inclusions, build types and service area should be replaced with the client's approved information when available.</p><Button to="/contact" variant="primary">Discuss a Project</Button></div></div></div></section>
    <section className="section section--gray"><div className="container"><SectionHeader eyebrow="What This Page Can Cover" title="From concept to completed home" /><div className="values-grid"><div className="icon-card"><div className="icon-circle"><Icon name="home" size={28} /></div><h3>New Homes</h3><p>Dedicated presentation for new residential builds and custom home projects.</p></div><div className="icon-card"><div className="icon-circle"><Icon name="ruler" size={28} /></div><h3>Planning</h3><p>Explain how the project moves from brief and scope into construction.</p></div><div className="icon-card"><div className="icon-circle"><Icon name="shield" size={28} /></div><h3>Quality</h3><p>Highlight approved materials, workmanship standards and project communication.</p></div></div></div></section>
    <section className="section"><div className="container"><div className="two-col"><div className="two-col-content"><SectionHeader eyebrow="Project Inclusions" title="Easy to replace when the client sends the real details" align="left" /><FeatureList items={['Approved residential service description','Build types and inclusions','Real project photography','Client-approved process','Service area and contact details']} /></div><div className="two-col-image"><img src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=85" alt="Modern home exterior" /></div></div></div></section>
    <FinalCTA title="Planning a new home?" subtitle="Turn this concept page into the client's real residential service page once their approved information is available." />
  </>;
}
