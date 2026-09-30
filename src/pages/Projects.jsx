import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import FinalCTA from '../components/FinalCTA';
import { projects } from '../data/siteData';
import VideoShowcase from '../components/VideoShowcase';

export default function Projects() {
  return <>
    <PageHero title="Projects" subtitle="A portfolio-focused gallery designed to become the main proof section once the client provides real project photography and details." />
    <section className="section"><div className="container"><SectionHeader eyebrow="Featured Work" title="Construction Portfolio" subtitle="A visual-first project presentation inspired by modern construction portfolios. Replace the demonstration imagery and copy with Gill's approved project material before launch." /><div className="projects-featured"><article className="project-featured-card"><div className="project-image"><img src={projects[0].image} alt={projects[0].title} /></div><div className="project-featured-overlay"><span>{projects[0].category}</span><h3>{projects[0].title}</h3><p>{projects[0].description}</p><a href="/contact">Discuss a Similar Project <span>↗</span></a></div></article></div><div className="project-grid project-grid--premium">{projects.slice(1).map((project, index) => <article className="project-card" key={project.title}><div className="project-image"><img src={project.image} alt={project.title} loading="lazy" /><div className="project-image-shade"><span>0{index + 2}</span><span>View project ↗</span></div></div><div className="project-body"><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><a href="/contact">Discuss a Similar Project <span>→</span></a></div></article>)}</div></div></section>
    <section className="section section--gray"><div className="container"><SectionHeader eyebrow="Video Showcase" title="A portfolio that moves" subtitle="Use video to give visitors a stronger sense of scale, workmanship and project activity." /><VideoShowcase compact /></div></section>
    <section className="section section--gray"><div className="container"><div className="portfolio-note"><span className="eyebrow">Portfolio Ready</span><h2>Real client photos will make this section much stronger.</h2><p>When the client sends project photos, names, locations, scope and outcomes, replace each card in <code>src/data/siteData.js</code>. The page layout does not need to be rebuilt.</p></div></div></section>
    <FinalCTA title="Have a project worth showcasing?" subtitle="Add real project photography and approved case-study copy here when the client supplies it." />
  </>;
}
