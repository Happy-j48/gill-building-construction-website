import { useState } from 'react';
import Icon from './Icon';

export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <span className="faq-toggle">
          <Icon name="chevronDown" size={18} />
        </span>
      </button>
      <div className="faq-answer" style={{ maxHeight: open ? '500px' : '0' }}>
        <div className="faq-answer-inner">{answer}</div>
      </div>
    </div>
  );
}
