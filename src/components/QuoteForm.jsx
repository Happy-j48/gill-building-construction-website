import { useState } from 'react';
import Icon from './Icon';
import Button from './Button';
import { serviceOptions } from '../data/siteData';
const initialForm = { name: '', email: '', phone: '', postcode: '', service: '', message: '' };
export default function QuoteForm() {
  const [form, setForm] = useState(initialForm); const [errors, setErrors] = useState({}); const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => { const { name, value } = e.target; setForm((prev) => ({ ...prev, [name]: value })); if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined })); };
  const validate = () => { const next = {}; if (!form.name.trim()) next.name = 'Please enter your name'; if (!form.email.trim()) next.email = 'Please enter your email'; else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email'; if (!form.phone.trim()) next.phone = 'Please enter your phone number'; if (!form.service) next.service = 'Please select a project type'; if (!form.message.trim()) next.message = 'Please tell us about your project'; return next; };
  const handleSubmit = (e) => { e.preventDefault(); const next = validate(); if (Object.keys(next).length) return setErrors(next); setSubmitted(true); };
  if (submitted) return <div className="quote-form form-success"><div className="success-icon"><Icon name="check" size={36} /></div><h3>Thanks, {form.name.split(' ')[0]}!</h3><p>This demo enquiry has been captured locally. When the client is ready, connect this form to their preferred email or form service.</p><Button variant="secondary" onClick={() => { setForm(initialForm); setSubmitted(false); }}>Send Another Enquiry</Button></div>;
  return <form className="quote-form" onSubmit={handleSubmit} noValidate>
    <div className="form-heading"><span>Project enquiry</span><h3>Tell us what you’re building</h3><p>Use this as the future client enquiry flow.</p></div>
    <div className="form-row">
      <div className={`form-group${errors.name ? ' has-error' : ''}`}><label htmlFor="name">Name *</label><input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />{errors.name && <span className="error-text">{errors.name}</span>}</div>
      <div className={`form-group${errors.email ? ' has-error' : ''}`}><label htmlFor="email">Email *</label><input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />{errors.email && <span className="error-text">{errors.email}</span>}</div>
    </div>
    <div className="form-row">
      <div className={`form-group${errors.phone ? ' has-error' : ''}`}><label htmlFor="phone">Phone *</label><input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone number" />{errors.phone && <span className="error-text">{errors.phone}</span>}</div>
      <div className="form-group"><label htmlFor="postcode">Suburb / Postcode</label><input id="postcode" name="postcode" value={form.postcode} onChange={handleChange} placeholder="Suburb or postcode" /></div>
    </div>
    <div className={`form-group${errors.service ? ' has-error' : ''}`}><label htmlFor="service">Project Type *</label><select id="service" name="service" value={form.service} onChange={handleChange}><option value="">Select a project type...</option>{serviceOptions.map((opt) => <option key={opt}>{opt}</option>)}</select>{errors.service && <span className="error-text">{errors.service}</span>}</div>
    <div className={`form-group${errors.message ? ' has-error' : ''}`}><label htmlFor="message">Project Details *</label><textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about the project, property and what you want to achieve..." />{errors.message && <span className="error-text">{errors.message}</span>}</div>
    <Button type="submit" variant="primary" block size="lg">Send Project Enquiry</Button><p className="form-note">No backend is connected in this portfolio version.</p>
  </form>;
}
