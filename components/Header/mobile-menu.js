import Image from 'next/image';
import NavLinks from './nav-links';
import Button from '../Buttons/Button';
import './mobile-menu.css';

export default function MobileMenu({ links, toggleMobileMenu }) {
  return (
    <div className="mobile-menu">
      <button
        className="close-menu"
        onClick={toggleMobileMenu}
        aria-label="Закрыть меню"
      >
        <Image src="/btn-close.svg" alt="Закрыть меню" width={32} height={32} />
      </button>

      <nav className="mobile-nav-links">
        <NavLinks links={links} onClick={toggleMobileMenu} />
      </nav>

      <div className="mobile-auth-buttons">
        <Button variant="filled" size="lg">Регистрация</Button>
        <Button variant="outline" size="lg">Вход</Button>

      </div>
    </div>
  );
}
