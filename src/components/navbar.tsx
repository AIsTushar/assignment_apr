import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-transparent pt-6">
      <div className="mx-auto flex w-[96%] max-w-290 items-center justify-between border border-[#E5B300] bg-white px-6 py-4 lg:px-10">
        <Link href="/" aria-label="Go to homepage">
          <Image src="/images/google.png" alt="Logo" width={96} height={96} />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
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

        <div className="hidden md:block">
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
      </div>
    </header>
  );
}
