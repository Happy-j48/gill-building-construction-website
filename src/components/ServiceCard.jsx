import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function ServiceCard({ title, description, icon, image, link }) {
  return (
    <div className="service-card">
      {image && (
        <div className="service-card-image">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}
      <div className="service-card-body">
        {icon && (
          <div className="icon-circle">
            <Icon name={icon} size={24} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <Link to={link} className="service-card-link">
            Learn More <Icon name="arrowRight" size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
