'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '../NavLinks/nav-links';
import AuthButtons from './auth-buttons';
import MobileMenu from './mobile-menu';
import Container from '../Container/container';

import { navLinks } from '../../data/data';
import './header.css';

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-section">
      <Container>
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
      </Container>
    </header>
  );
}
