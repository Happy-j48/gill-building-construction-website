import Icon from './Icon';

export default function FeatureList({ items }) {
  return (
    <div className="feature-list">
      {items.map((item, i) => (
        <div key={i} className="feature-item">
          <span className="check-icon">
            <Icon name="checkSmall" size={18} strokeWidth={3} />
          </span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}
