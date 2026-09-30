import Icon from './Icon';

export default function TestimonialCard({ quote, name, location }) {
  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2);

  return (
    <div className="testimonial-card">
      <div className="quote-mark">&ldquo;</div>
      <div className="stars">
        {[0, 1, 2, 3, 4].map((i) => (
          <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="quote-text">{quote}</p>
      <div className="author">
        <div className="avatar">{initials}</div>
        <div className="author-info">
          <div className="name">{name}</div>
          <div className="location">{location}</div>
        </div>
      </div>
    </div>
  );
}
