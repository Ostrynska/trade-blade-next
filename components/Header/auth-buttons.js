import Button from '../Buttons/Button';

import './auth-buttons.css';

export default function AuthButtons()
{
  return (
      <div className="auth-buttons">
          <Button variant="outline" size="md">Вход</Button>
          <Button variant="filled" size="md">Регистрация</Button>
    </div>
  );
}