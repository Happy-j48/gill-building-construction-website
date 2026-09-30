import { Link } from 'react-router-dom';

export default function Button({ to, href, variant = 'primary', size = '', block = false, children, onClick, type = 'button', className = '' }) {
  const classes = `btn btn-${variant}${size ? ` btn-${size}` : ''}${block ? ' btn-block' : ''}${className ? ` ${className}` : ''}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
