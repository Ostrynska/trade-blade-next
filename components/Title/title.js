import './title.css';

export default function Title({ children, className = '' }) {
  return (
    <h2 className={`title ${className}`}>
      {children}
    </h2>
  );
}