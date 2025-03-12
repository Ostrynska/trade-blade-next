import './about.css';
import { information } from '../../data/data';
import Title from '../Title/title';
import Form from '../Form/form';
import Container from '../Container/container';

export default function AboutSection() {
  return (
    <section className="about-section" id="about-section">
      <Container>
        <div className="about-left">
          <Title>О компании</Title>
          <ul className="about-info">
            {information.map((feature, index) => (
              <li key={index} className="about-text">
                {feature.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-cta">
          <h3 className="cta-title">
            Попробуйте сейчас и получите 5 дней бесплатного пользования
          </h3>

          <Form buttonText="ПОПРОБОВАТЬ" inputClassName="cta-input" buttonClassName='button'/>
        </div>
      </Container>
    </section>
  );
}
