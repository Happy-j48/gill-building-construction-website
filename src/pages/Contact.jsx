import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import QuoteForm from '../components/QuoteForm';
import Icon from '../components/Icon';
import { company } from '../data/siteData';

export default function Contact() {
  const details = [
    { icon: 'phone', label: 'Phone', value: company.phone, href: company.phoneHref },
    { icon: 'mail', label: 'Email', value: company.email, href: company.emailHref },
    { icon: 'pin', label: 'Location', value: company.address },
    { icon: 'clock', label: 'Hours', value: company.hours },
  ];
  return <>
    <PageHero title="Contact Gill Building & Construction" subtitle="A clean project enquiry page designed to turn website visitors into conversations." />
    <section className="section"><div className="container"><div className="contact-layout"><div><SectionHeader eyebrow="Contact Details" title="Start with a conversation" align="left" /><p className="contact-intro">The details below are placeholders because the client has not yet supplied their final contact information. Replace them in <code>src/data/siteData.js</code>.</p><div className="contact-details">{details.map((item) => <div className="contact-info-item" key={item.label}><div className="contact-info-icon"><Icon name={item.icon} size={24} /></div><div><div className="contact-info-label">{item.label}</div>{item.href !== '#' ? <a className="contact-info-value" href={item.href}>{item.value}</a> : <div className="contact-info-value">{item.value}</div>}</div></div>)}</div></div><QuoteForm /></div></div></section>
    <section className="section section--dark"><div className="container contact-banner"><div><span className="eyebrow">Future Client Assets</span><h2>Add the real details here before launch.</h2><p>Phone, email, service area, map, social profiles and approved enquiry handling can all be connected without changing the site's core design.</p></div><img src="/images/gill-logo-cropped.jpg" alt={company.name} /></div></section>
  </>;
}
