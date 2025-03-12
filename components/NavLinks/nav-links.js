import Link from 'next/link';

export default function NavLinks({ links, onClick }) {
  return (
    <>
      {links.map(({ label, href }, index) => (
        <Link key={index} href={href} onClick={onClick}>
          {label}
        </Link>
      ))}
    </>
  );
}