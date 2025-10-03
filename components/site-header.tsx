"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type NavigationItem = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  navigation: NavigationItem[];
};

export function SiteHeader({ navigation }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          Ozis Auto
        </Link>
        <button
          type="button"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center text-slate-700 transition md:hidden"
        >
          <span className="sr-only">Menüyü aç/kapat</span>
          <span className="flex flex-col gap-[6px]">
            <span
              aria-hidden
              className={`block h-[2px] w-5 rounded-full bg-current transition-transform ${
                isMenuOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              aria-hidden
              className={`block h-[2px] w-5 rounded-full bg-current transition-opacity ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              aria-hidden
              className={`block h-[2px] w-5 rounded-full bg-current transition-transform ${
                isMenuOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
        <nav className="hidden gap-6 text-sm font-medium uppercase tracking-[0.18em] text-slate-600 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-2 py-1 transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <nav
        className={`md:hidden ${
          isMenuOpen
            ? "block border-t border-slate-200 bg-white/95 backdrop-blur"
            : "hidden"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 pb-6 pt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600 sm:px-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center transition hover:border-slate-900 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
