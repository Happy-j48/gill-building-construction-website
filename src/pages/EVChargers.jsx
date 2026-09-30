import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import FeatureList from '../components/FeatureList';
import FinalCTA from '../components/FinalCTA';
import Button from '../components/Button';
import Icon from '../components/Icon';

export default function Renovations() {
  return <>
    <PageHero title="Renovations & Extensions" subtitle="A flexible page for kitchen, living, structural and whole-home renovations or extensions." />
    <section className="section"><div className="container"><div className="two-col"><div className="two-col-image"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85" alt="Modern renovated interior" /></div><div className="two-col-content"><SectionHeader eyebrow="Renovations" title="Transform the space you already have" align="left" /><p>Renovation projects need a different story from new builds. This page is designed to show before-and-after photography, project scope, design decisions and the finished result.</p><p>Replace this demo content with Gill's actual renovation services, project examples and process.</p><Button to="/contact" variant="primary">Plan a Renovation</Button></div></div></div></section>
    <section className="section section--gray"><div className="container"><SectionHeader eyebrow="Renovation Types" title="Flexible enough for future project categories" /><div className="values-grid"><div className="icon-card"><div className="icon-circle"><Icon name="home" size={28} /></div><h3>Home Renovations</h3><p>Refresh kitchens, living spaces, bedrooms and other areas of an existing home.</p></div><div className="icon-card"><div className="icon-circle"><Icon name="ruler" size={28} /></div><h3>Extensions</h3><p>Create additional space while connecting new work with the existing property.</p></div><div className="icon-card"><div className="icon-circle"><Icon name="wrench" size={28} /></div><h3>Property Improvements</h3><p>Showcase targeted upgrades, repairs and improvement projects once confirmed.</p></div></div></div></section>
    <section className="section"><div className="container"><div className="two-col"><div className="two-col-content"><SectionHeader eyebrow="Future Content" title="Replace the placeholders with real project stories" align="left" /><FeatureList items={['Before and after images','Project scope and challenge','Construction approach','Finished result','Client-approved project story']} /></div><div className="two-col-image"><img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85" alt="Renovated modern interior" /></div></div></div></section>
    <FinalCTA title="Thinking about renovating?" subtitle="This concept page is ready for Gill's real renovation services, photography and project case studies." />
  </>;
}
