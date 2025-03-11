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