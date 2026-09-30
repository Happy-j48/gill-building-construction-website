import { Link } from 'react-router-dom';
import Button from './Button';
import { company } from '../data/siteData';

export default function PageHero({ title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-content">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
