import Button from '../Buttons/button';
import './form.css';

export default function Form({
  buttonText = 'НАЧАТЬ',
  formClassName = '',
  inputClassName = '',
  buttonClassName = '',
}) {
  return (
    <form className={`form ${formClassName}`}>
      <input
        type="email"
        placeholder="ВАШ E-MAIL"
        className={`form-input ${inputClassName}`}
      />
      <Button
        variant="filled"
        size="lg"
        className={`button ${buttonClassName}`}
      >
        {buttonText}
      </Button>
    </form>
  );
}

export function FormMob({
  buttonText = 'НАЧАТЬ',
  formClassName = '',
  inputClassName = '',
  buttonClassName = '',
}) {
  return (
    <form className={`formMob ${formClassName}`}>
      <input
        type="email"
        placeholder="ВАШ E-MAIL"
        className={`form-input ${inputClassName}`}
      />
      <Button
        variant="filled"
        size="lg"
        className={`button ${buttonClassName}`}
      >
        {buttonText}
      </Button>
    </form>
  );
}

export function FormCta({
  buttonText = 'НАЧАТЬ',
  formClassName = '',
  inputClassName = '',
  buttonClassName = '',
}) {
  return (
    <div className='formCta-wrapper'>
      <form className={`formCta ${formClassName}`}>
      <input
        type="email"
        placeholder="ВАШ E-MAIL"
        className={`form-input inputCta ${inputClassName}`}
      />
      </form>
      <Button
        variant="filled"
        size="lg"
        className={` ${buttonClassName}`}
      >
        {buttonText}
      </Button>
</div>
  );
}