import Image from 'next/image';
import './hero.css';

export default function HeroSection() {
  return (
    <section className="hero-grid">

      <div className="hero-left">
        <h1 className="hero-title">
          МОМЕНТАЛЬНО <br />
          КОПИРУЙ СДЕЛКИ <br />
          ПРОФИ ТРЕЙДЕРОВ
        </h1>

        <p className="hero-description">
          Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом режиме.
        </p>

        <form className="hero-form">
          <input type="email" placeholder="ВАШ E-MAIL" />
          <button type="submit">НАЧАТЬ</button>
        </form>

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
    </section>
  );
}
