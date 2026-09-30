import Icon from './Icon';

export default function IconCard({ title, description, icon }) {
  return (
    <div className="icon-card">
      <div className="icon-circle">
        <Icon name={icon} size={28} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
