import './features.css';
import FeaturesItem from './features-item';
import Title from '../Title/title';

export default function FeaturesSection() {
  const features = [
    { label: 'ТОРГОВЫЙ ПРИБЫЛИ', value: '2756', char: '%' },
    { label: 'ФЬЮЧЕРСНЫХ И СПОТОВЫХ СДЕЛОК', value: '67' },
    { label: 'ПРИБЫЛЬ ПОДПИСЧИКОВ', value: '375000' },
  ];

  return (
    <section className="features-grid">
      <div className="features-left">
        <Title>ЦИФРЫ</Title>
        <p className="features-date">Сентябрь 2022</p>
      </div>

      {features.map((feature, index) => (
        <FeaturesItem
          key={index}
          label={feature.label}
          value={feature.value}
          char={feature.char}
        />
      ))}
    </section>
  );
}