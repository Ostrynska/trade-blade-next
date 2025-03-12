import './cta.css';
import Form from '../Form/form';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h3 className="cta-register-title">
            Начните прямо сейчас с бесплатным<br />5-и дневным пробным периодом!
        </h3>

        <Form buttonText="Зарегистрироваться" buttonClassName="cta-button" formClassName='cta-form'/>
      </div>
    </section>
  );
}
