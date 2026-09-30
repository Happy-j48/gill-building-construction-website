export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className="section-header" style={align === 'left' ? { textAlign: 'left', margin: '0 0 24px 0' } : undefined}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
