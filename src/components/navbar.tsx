"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto w-[92%] max-w-327.5 bg-white">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <Link href="/" aria-label="Go to homepage" onClick={closeMenu}>
            <Image
              src="/images/google.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-auto w-24 sm:w-27.5 lg:w-30"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link, index) => {
              const isActive = index === 0;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-[16px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#F14668]"
                      : "text-[#2B2B2B] hover:text-[#F14668]"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <span className="absolute left-0 top-full mt-1 h-0.5 w-full bg-[#F14668]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-[#F14668] px-6 py-3 text-[15px] font-semibold text-white transition hover:opacity-90"
            >
              Schedule A Meeting
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#f3d6dd] text-[#2B2B2B] transition hover:bg-[#fff1f4] lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`overflow-hidden border-t border-[#f3d6dd] transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className="flex flex-col px-4 py-4 sm:px-6"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, index) => {
              const isActive = index === 0;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className={`border-b border-[#f7e4e8] py-3 text-[15px] font-medium transition-colors last:border-b-0 ${
                    isActive
                      ? "text-[#F14668]"
                      : "text-[#2B2B2B] hover:text-[#F14668]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-[#F14668] px-6 py-3 text-[15px] font-semibold text-white transition hover:opacity-90"
            >
              Schedule A Meeting
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
