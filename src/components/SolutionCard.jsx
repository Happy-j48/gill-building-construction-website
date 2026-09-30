import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function SolutionCard({ title, description, image, link }) {
  return (
    <div className="solution-card">
      <img src={image} alt={title} loading="lazy" />
      <div className="solution-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link}>
          Learn More <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </div>
  );
}
