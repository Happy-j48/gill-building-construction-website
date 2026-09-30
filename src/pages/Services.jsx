import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import FeatureList from '../components/FeatureList';
import FinalCTA from '../components/FinalCTA';
import { services } from '../data/siteData';

export default function Services() {
  return <>
    <PageHero title="Our Construction Services" subtitle="A flexible construction service structure designed for residential builds, commercial projects, renovations and extensions." />
    <section className="section"><div className="container"><SectionHeader eyebrow="What We Offer" title="Construction Services" subtitle="These are portfolio-ready service categories. Replace them with the client's exact offerings when confirmed." /><div className="cards-grid">{services.map((service) => <ServiceCard key={service.title} {...service} />)}</div></div></section>
    <section className="section section--gray"><div className="container"><SectionHeader eyebrow="Project Delivery" title="How a Project Can Be Managed" /><div className="steps-grid"><div className="step-card"><div className="step-number">01</div><h3>Discuss</h3><p>Understand the property, goals, priorities and expected outcome.</p></div><div className="step-card"><div className="step-number">02</div><h3>Plan</h3><p>Define the scope, key decisions, timing and project requirements.</p></div><div className="step-card"><div className="step-number">03</div><h3>Build</h3><p>Coordinate construction with attention to quality, safety and communication.</p></div><div className="step-card"><div className="step-number">04</div><h3>Handover</h3><p>Complete finishing details and review the finished project with the client.</p></div></div></div></section>
    <section className="section"><div className="container"><div className="two-col"><div className="two-col-content"><SectionHeader eyebrow="Quality Matters" title="A website that sells the process, not just the finished photo" align="left" /><p>Construction clients often want to understand how a builder communicates, plans and manages a project before they enquire. This section is designed to support that decision.</p><FeatureList items={['Clear project scope and expectations','Practical communication throughout the build','Quality-focused construction presentation','Project photography and case studies','Simple enquiry and quote journey']} /></div><div className="two-col-image"><img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85" alt="Construction team working on a project" /></div></div></div></section>
    <FinalCTA title="Have a project in mind?" subtitle="Use the enquiry page to show how a future visitor can request a conversation about their building project." />
  </>;
}
