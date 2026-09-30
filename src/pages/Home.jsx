import Button from '../components/Button';
import Icon from '../components/Icon';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import IconCard from '../components/IconCard';
import SolutionCard from '../components/SolutionCard';
import TestimonialCard from '../components/TestimonialCard';
import FaqItem from '../components/FaqItem';
import FinalCTA from '../components/FinalCTA';
import QuoteForm from '../components/QuoteForm';
import VideoShowcase from '../components/VideoShowcase';
import { stats, services, whyChooseUs, howItWorks, solutions, testimonials, homeFaqs, serviceAreas } from '../data/siteData';

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-bg"><img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85" alt="Modern construction project" /></div>
      <div className="container"><div className="hero-content fade-up">
        <span className="hero-eyebrow"><Icon name="building" size={16} /> Building &amp; Construction</span>
        <h1>Building Quality. <span className="highlight">Creating Lasting Value.</span></h1>
        <p>Gill Building &amp; Construction is presented here as a modern, professional construction brand focused on quality workmanship, clear communication and practical project delivery.</p>
        <div className="hero-actions"><Button to="/contact" variant="primary" size="lg">Request a Quote</Button><Button to="/projects" variant="outline-light" size="lg">View Projects</Button></div>
        <div className="hero-trust"><div className="hero-trust-item"><Icon name="shield" size={20} /> Quality Focused</div><div className="hero-trust-item"><Icon name="check" size={20} /> Detail Driven</div><div className="hero-trust-item"><Icon name="wrench" size={20} /> Built With Care</div></div>
      </div></div>
    </section>

    <VideoShowcase />

    <section className="section stats-section"><div className="container"><div className="stats-grid">{stats.map((stat) => <div key={stat.label} className="stat-card"><div className="stat-value">{stat.value}</div><div className="stat-label">{stat.label}</div></div>)}</div></div></section>

    <section className="section section--gray"><div className="container"><SectionHeader eyebrow="What We Do" title="Construction Solutions Built Around Your Project" subtitle="A flexible service structure for residential, commercial and renovation projects — ready to be replaced with the client's exact services." /><div className="cards-grid">{services.map((service) => <ServiceCard key={service.title} {...service} />)}</div></div></section>

    <section className="section"><div className="container"><SectionHeader eyebrow="Why Gill" title="A Professional Building Experience" subtitle="The website is designed to communicate the qualities construction clients look for before making an enquiry." /><div className="icon-cards-grid">{whyChooseUs.map((item) => <IconCard key={item.title} {...item} />)}</div></div></section>

    <section className="section section--dark"><div className="container brand-showcase"><div className="brand-showcase-copy"><span className="eyebrow">Client Branding</span><h2>Strong visual identity for a strong construction brand.</h2><p>The supplied Gill Building &amp; Construction logo is now part of the website's navigation, footer and brand system. The temporary construction imagery can be swapped for the client's own project photography later.</p><Button to="/about" variant="primary">Discover Our Approach</Button></div><div className="brand-showcase-image"><img src="/images/gill-brand-banner.jpg" alt="Gill Building & Construction brand graphic" /></div></div></section>

    <section className="section section--gray"><div className="container"><SectionHeader eyebrow="Our Process" title="A Clear Path From Idea to Handover" subtitle="A simple process section that can be replaced with Gill's actual workflow when the client provides it." /><div className="steps-grid">{howItWorks.map((step) => <div key={step.step} className="step-card"><div className="step-number">{step.step}</div><h3>{step.title}</h3><p>{step.description}</p></div>)}</div></div></section>

    <section className="section section--dark portfolio-section"><div className="container"><SectionHeader eyebrow="Featured Work" title="Project Portfolio" subtitle="Concept construction imagery is used for the portfolio until the client supplies real project photos." /><div className="cards-grid cols-3">{solutions.map((sol) => <SolutionCard key={sol.title} {...sol} />)}</div><div className="center-action"><Button to="/projects" variant="secondary">View All Projects</Button></div></div></section>

    <section className="section section--gray"><div className="container"><SectionHeader eyebrow="Client Experience" title="What Good Project Communication Looks Like" subtitle="These are sample portfolio testimonials and must be replaced with client-approved testimonials before a live launch." /><div className="testimonials-grid">{testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}</div></div></section>

    <section className="section"><div className="container"><SectionHeader eyebrow="Questions" title="Frequently Asked Questions" subtitle="Common questions visitors may have when considering a construction project." /><div className="faq-list">{homeFaqs.slice(0, 4).map((faq) => <FaqItem key={faq.question} {...faq} />)}</div><div className="center-action"><Button to="/faqs" variant="secondary">View All FAQs</Button></div></div></section>

    <section className="section section--navy"><div className="container"><SectionHeader eyebrow="Project Types" title="Built Around Different Property Needs" subtitle="The final service area and project categories should be updated from the client's real information." /><div className="areas-grid">{serviceAreas.map((area) => <span key={area} className="area-pill">{area}</span>)}</div></div></section>

    <FinalCTA />
    <section className="section section--gray" id="quote"><div className="container"><SectionHeader eyebrow="Get Started" title="Start Your Project Enquiry" subtitle="This form is currently a front-end demo. Connect it to the client's email or form provider before launch." /><QuoteForm /></div></section>
  </>;
}
