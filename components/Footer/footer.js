import Image from 'next/image';
import NavLinks from '../NavLinks/nav-links';
import { navLinks } from '../../data/data';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-left">
          <p className="footer-heading">БЫСТРАЯ НАВИГАЦИЯ</p>
          <nav className="nav-links">
            <NavLinks links={navLinks} />
          </nav>
        </div>

        <div className="footer-right">
          <Image
            src="/logo.png"
            alt="TradeBlade Logo"
            width={165}
            height={80}
            priority={true}
            className="footer-logo"
          />
          <p className="footer-copy">© 2022 TradeBlade. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
