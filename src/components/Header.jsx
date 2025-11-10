import React, { useEffect, useState } from 'react';

function formatTime24(date) {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

const Header = () => {
  const [time, setTime] = useState(formatTime24(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime24(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Events', href: '#events' },
    { label: 'BTS', href: '#bts' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Past Mentors', href: '#past-mentors' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:ring-2 focus:ring-emerald-500"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <div aria-hidden className="h-8 w-8 rounded-lg bg-emerald-500" />
          <span className="text-lg font-semibold tracking-tight text-gray-900">MindQuest</span>
        </div>
        <nav aria-label="Primary" className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div
          aria-live="polite"
          className="ml-6 hidden font-mono text-sm text-gray-600 md:block"
          title="Live time (24h)"
        >
          {time}
        </div>
      </div>
    </header>
  );
};

export default Header;
