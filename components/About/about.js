import './about.css';
import Title from '../Title/title';
import Form from '../Form/form';

export default function AboutSection() {
  const information = [
    {
      label:
        'Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.',
    },
    {
      label:
        'Он представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.',
    },
  ];

  return (
    <section className="about-grid">
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
    </section>
  );
}
