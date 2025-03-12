import Image from 'next/image';
import Form from '../Form/form';
import './hero.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className='hero-container'>
      <div className="hero-left">
        <h1 className="hero-title">
          МОМЕНТАЛЬНО <br />
          КОПИРУЙ СДЕЛКИ <br />
          ПРОФИ ТРЕЙДЕРОВ
        </h1>

        <p className="hero-description">
          Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом режиме.
        </p>

        <Form buttonText="НАЧАТЬ" />

        <p className="hero-note">5 дней бесплатного пользования</p>
      </div>

      <div className="hero-right">
        <Image
          src="/hero.png"
          alt="Hero Illustration"
          width={469}
          height={209}
          className="hero-image"
        />
      </div>
      </div>

    </section>
  );
}
