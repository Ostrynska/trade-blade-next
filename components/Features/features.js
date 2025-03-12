import FeaturesItem from './features-item';
import Title from '../Title/title';
import Container from '../Container/container';
import {features} from '../../data/data';
import './features.css';

export default function FeaturesSection() {
  return (
    <section className="features-section" id='numbers-section'>
      <Container>
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
      </Container>
    </section>
  );
}
