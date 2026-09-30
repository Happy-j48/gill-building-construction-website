// Central business configuration for the Gill Building & Construction concept website.
// Replace the clearly marked placeholder details with the client's approved information.

export const company = {
  name: 'Gill Building & Construction',
  shortName: 'Gill Building',
  tagline: 'Building Quality. Creating Lasting Value.',
  phone: 'Client phone — replace',
  phoneHref: '#',
  email: 'Client email — replace',
  emailHref: '#',
  address: 'Service area — replace with client address',
  abn: 'ABN — replace',
  hours: 'Business hours — replace',
  social: [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'Contact', path: '/contact' },
];

export const serviceNavLinks = [
  { label: 'Residential Construction', path: '/residential-construction' },
  { label: 'Commercial Construction', path: '/commercial-construction' },
  { label: 'Renovations & Extensions', path: '/renovations' },
];

export const stats = [
  { value: 'Quality', label: 'Construction Focus' },
  { value: 'Clear', label: 'Communication' },
  { value: 'Careful', label: 'Workmanship' },
  { value: 'End-to-End', label: 'Project Support' },
];

const constructionImages = {
  hero: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85',
  residential: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85',
  commercial: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
  renovation: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
  worker: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85',
  architecture: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85',
  interior: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
  apartment: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
};

export const services = [
  {
    title: 'Residential Construction',
    description: 'Thoughtful new-build homes designed around modern living, practical layouts and lasting workmanship.',
    icon: 'home',
    image: constructionImages.residential,
    link: '/residential-construction',
  },
  {
    title: 'Commercial Construction',
    description: 'Professional building solutions for commercial spaces, offices and property improvements.',
    icon: 'building',
    image: constructionImages.commercial,
    link: '/commercial-construction',
  },
  {
    title: 'Renovations & Extensions',
    description: 'Transform existing spaces with carefully planned renovations, extensions and modern upgrades.',
    icon: 'wrench',
    image: constructionImages.renovation,
    link: '/renovations',
  },
  {
    title: 'Project Management',
    description: 'A coordinated approach from planning and trades through to final finishing and handover.',
    icon: 'check',
    image: constructionImages.worker,
    link: '/services',
  },
];

export const whyChooseUs = [
  {
    title: 'Quality Workmanship',
    description: 'A strong focus on careful detailing, practical construction and a finished result that feels built to last.',
    icon: 'shield',
  },
  {
    title: 'Clear Communication',
    description: 'Keep clients informed with straightforward conversations, clear next steps and practical project updates.',
    icon: 'phone',
  },
  {
    title: 'Practical Solutions',
    description: 'Construction decisions should balance design, budget, functionality and long-term value.',
    icon: 'wrench',
  },
  {
    title: 'Attention to Detail',
    description: 'From the structure to the finishing touches, every part of the project deserves careful attention.',
    icon: 'check',
  },
  {
    title: 'Client-Focused',
    description: 'The goal is a building experience that feels organised, transparent and easy to understand.',
    icon: 'heart',
  },
  {
    title: 'End-to-End Support',
    description: 'A single website experience covering construction, renovation, project coordination and enquiries.',
    icon: 'map',
  },
];

export const howItWorks = [
  { step: '01', title: 'Initial Conversation', description: 'Discuss your project, priorities, style and the outcome you want to achieve.' },
  { step: '02', title: 'Planning & Scope', description: 'Define the project scope, key requirements, budget considerations and next steps.' },
  { step: '03', title: 'Construction', description: 'Coordinate the work with a strong focus on safety, quality and clear communication.' },
  { step: '04', title: 'Final Handover', description: 'Review the completed work, finish the final details and hand over the project.' },
];

export const projects = [
  {
    title: 'Modern Family Residence',
    category: 'Residential Construction',
    description: 'A contemporary home concept combining clean architecture, practical living zones and strong street appeal.',
    image: constructionImages.residential,
  },
  {
    title: 'Contemporary Commercial Space',
    category: 'Commercial Construction',
    description: 'A polished commercial property concept focused on functionality, durability and a professional presentation.',
    image: constructionImages.commercial,
  },
  {
    title: 'Home Renovation & Extension',
    category: 'Renovation',
    description: 'A renovation concept that connects an existing home with a more spacious, modern living area.',
    image: constructionImages.renovation,
  },
  {
    title: 'New Build Concept',
    category: 'Residential Construction',
    description: 'A new-build concept showing how structure, materials and landscaping can come together as one design.',
    image: constructionImages.architecture,
  },
  {
    title: 'Interior Transformation',
    category: 'Renovation',
    description: 'A modern interior concept demonstrating how thoughtful finishes can refresh an existing property.',
    image: constructionImages.interior,
  },
  {
    title: 'Premium Home Exterior',
    category: 'Residential Construction',
    description: 'A clean, contemporary exterior concept created to demonstrate the visual direction of a premium build.',
    image: constructionImages.apartment,
  },
];

export const solutions = projects.slice(0, 3).map((project) => ({
  title: project.title,
  description: project.description,
  image: project.image,
  link: '/projects',
}));

// Portfolio/demo testimonials — replace with client-approved testimonials before publishing as real claims.
export const testimonials = [
  {
    quote: 'The project was organised from the first conversation through to the finishing details. We always knew what was happening next.',
    name: 'Sample Client',
    location: 'Portfolio concept',
  },
  {
    quote: 'The design feels practical, modern and built around the way our family actually uses the home.',
    name: 'Sample Homeowner',
    location: 'Portfolio concept',
  },
  {
    quote: 'Clear communication and attention to detail made the whole building process feel much easier to understand.',
    name: 'Sample Property Owner',
    location: 'Portfolio concept',
  },
];

export const homeFaqs = [
  {
    question: 'What types of building projects can you help with?',
    answer: 'This concept website is structured for residential construction, commercial construction, renovations, extensions and project coordination. The final service list should be replaced with the client-approved services.',
  },
  {
    question: 'Can you help with renovations and extensions?',
    answer: 'Yes, renovations and extensions are included as a service category in this demo structure. Exact capabilities should be confirmed with the client before publishing.',
  },
  {
    question: 'How does the building process work?',
    answer: 'A typical website journey can explain the process as an initial conversation, planning and scope, construction, and final handover. The client can replace these steps with their actual process.',
  },
  {
    question: 'Can I request a project consultation?',
    answer: 'Yes. The contact page includes a project enquiry form so visitors can share their details and project requirements.',
  },
  {
    question: 'Do you work on residential and commercial projects?',
    answer: 'Both categories are included in this portfolio version. The final website should reflect the client’s confirmed project types and service area.',
  },
  {
    question: 'Can project photos be added later?',
    answer: 'Absolutely. The Projects page is designed so the current concept images can be replaced with the client’s real project photography without changing the page structure.',
  },
];

export const allFaqs = [
  ...homeFaqs,
  {
    question: 'Will the website content be easy to update?',
    answer: 'Yes. Business details, services, project cards, FAQs and other reusable content are centralised in the site data file so future updates can be made without rebuilding the website.',
  },
  {
    question: 'Can the site be updated with our real branding?',
    answer: 'Yes. The Gill Building & Construction logo and brand colours are already used in this concept. Real copy, photos, contact details and approved project information can be substituted later.',
  },
];

export const serviceAreas = [
  'Residential',
  'Commercial',
  'New Builds',
  'Renovations',
  'Extensions',
  'Property Improvements',
];

export const serviceOptions = [
  'Residential Construction',
  'Commercial Construction',
  'Renovations & Extensions',
  'Project Management',
  'General Building Enquiry',
  'Other',
];

export { constructionImages };
