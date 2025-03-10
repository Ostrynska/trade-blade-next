import Image from 'next/image';
import Link from 'next/link';
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
  return (
    <header className="header-grid">
        <div className="navbar">
            <div className="logo">
                <Link href="/">
                <Image
                    src="/logo.png"
                    alt="TradeBlade Logo"
                    width={132}
                    height={64}
                    priority={true}
                />
                </Link>
            </div>

            <nav className="nav-links" aria-label="Главная навигация">
                {navLinks.map(({ label, href }, index) => (
                <Link key={index} href={href}>
                    {label}
                </Link>
                ))}
            </nav>

            <div className="auth-buttons">
                <button className="btn btn-outline">Вход</button>
                <button className="btn btn-filled">Регистрация</button>
            </div>
        </div>
    </header>
);
}
