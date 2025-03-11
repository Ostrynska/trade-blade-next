'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './nav-links';
import AuthButtons from './auth-buttons';
import MobileMenu from './mobile-menu';
import './header.css';

const navLinks = [
  { label: 'Цифры', href: '#' },
  { label: 'Сделки онлайн', href: '#' },
  { label: 'О компании', href: '#' },
  { label: 'Как начать', href: '#' },
  { label: 'Тарифы', href: '#' },
  { label: 'Отзывы', href: '#' },
  { label: 'FAQ', href: '#' },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-grid">
      <div className="navbar">
        <div className="logo">
        <Link href="/">
        <Image
            src="/logo.png"
            alt="TradeBlade Logo"
            priority={true}
            width={132}
            height={64}
            sizes="(max-width: 768px) 107px, (min-width: 1200px) 132px"
            className="logo"
        />
        </Link>
        </div>

        <nav className="nav-links">
          <NavLinks links={navLinks} />
        </nav>
        <AuthButtons />

        <button
          className="burger-menu"
          onClick={toggleMobileMenu}
          aria-label="Открыть меню"
        >
           <Image src="btn-open.svg" alt="Открыть меню" width={32} height={32} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <MobileMenu links={navLinks} toggleMobileMenu={toggleMobileMenu} />
      )}
    </header>
  );
}
