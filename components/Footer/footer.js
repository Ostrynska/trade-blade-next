import Image from 'next/image';
import NavLinks from '../NavLinks/nav-links';
import './footer.css';

export default function Footer() {
  const navLinks = [
    { label: 'Цифры', href: '#' },
    { label: 'Сделки онлайн', href: '#' },
    { label: 'О компании', href: '#' },
    { label: 'Как начать', href: '#' },
    { label: 'Тарифы', href: '#' },
    { label: 'Отзывы', href: '#' },
    { label: 'FAQ', href: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-left">
          <p className="footer-heading">БЫСТРАЯ НАВИГАЦИЯ</p>
          <NavLinks links={navLinks} />
        </div>

        <div className="footer-right">
          <Image
            src="/logo.png"
            alt="TradeBlade Logo"
            width={132}
            height={64}
            priority={true}
            className="footer-logo"
          />
          <p className="footer-copy">© 2022 TradeBlade. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
