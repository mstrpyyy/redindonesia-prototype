'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Breadcrumbs = () => {
  const pathname = usePathname();

  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  const formatSegment = (segment: string) => {
    return segment
      .replaceAll('-', ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <nav className="text-neutral-300 text-xxs sm:text-xs">
      <Link href="/" className="hover:underline">
        Home
      </Link>

      {segments.map((segment, index) => {
        const href = '/' + segments.slice(0, index + 1).join('/');

        return (
          <span key={href}>
            <span> / </span>
            <Link href={href} className="hover:underline text-nowrap text-shadow">
              {formatSegment(segment)}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};
