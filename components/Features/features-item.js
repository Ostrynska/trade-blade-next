import './features-item.css';

export default function FeaturesItem({ label, value, char }) {
  return (
    <li className="features-item">
      <p className="features-label">{label}</p>
      <h3 className="features-value numeric">{value}<span className="features-value">{char}</span></h3>
    </li>
  );
}