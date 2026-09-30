import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import FaqItem from '../components/FaqItem';
import FinalCTA from '../components/FinalCTA';
import Button from '../components/Button';
import { allFaqs } from '../data/siteData';

export default function FAQs() {
  return <>
    <PageHero title="Frequently Asked Questions" subtitle="A clear FAQ page for common building, renovation, project and enquiry questions." />
    <section className="section"><div className="container"><SectionHeader eyebrow="FAQs" title="Questions visitors may ask" /><div className="faq-list">{allFaqs.map((faq) => <FaqItem key={faq.question} {...faq} />)}</div></div></section>
    <section className="section section--gray"><div className="container narrow-center"><SectionHeader eyebrow="Still Have Questions?" title="Let’s talk about your project" subtitle="The final version can include the client's real contact details and response process." /><Button to="/contact" variant="primary" size="lg">Contact Gill Building</Button></div></section>
    <FinalCTA />
  </>;
}
