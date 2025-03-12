import './about.css';
import { information } from '../../data/data';
import Title from '../Title/title';
import Form, { FormCta } from '../Form/form';
import {FormMob} from '../Form/form';

export default function AboutSection() {
  return (
    <section className="about-section" id="about-section">
      <div className='about-container'>
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
          <FormCta buttonText="ПОПРОБОВАТЬ" inputClassName="cta-input"/>

          <FormMob buttonText="ПОПРОБОВАТЬ" inputClassName="cta-input" buttonClassName='button'/>
        </div>
      </div>
    </section>
  );
}
