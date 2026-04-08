import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import Image from "next/image";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Works", href: "/works" },
  { label: "Career", href: "/career" },
];

const helpLinks = [
  { label: "Customer Support", href: "/customer-support" },
  { label: "Delivery Details", href: "/delivery-details" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const resourceLinks = [
  { label: "Free eBooks", href: "/free-ebooks" },
  { label: "Development Tutorial", href: "/development-tutorial" },
  { label: "How to - Blog", href: "/blog" },
  { label: "Youtube Playlist", href: "/youtube-playlist" },
];

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "Github", href: "https://github.com", icon: FaGithub },
];

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[16px] font-bold text-text">{title}</h3>

      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[15px] font-semibold text-[#3a3a3a] transition hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="border-t border-[#d9d9d9]" />

      <div className="mx-auto grid w-[92%] max-w-310 grid-cols-1 gap-12 px-2 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr] lg:gap-16 lg:py-16">
        <div className="max-w-90">
          <Link href="/" aria-label="Go to homepage">
            <Image
              src="/images/google.png"
              alt="Logo"
              width={106}
              height={38}
            />
          </Link>

          <p className="mt-6 max-w-[320px] text-[15px] leading-7 text-[#6b6b6b]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
            sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>

          <div className="mt-8 flex items-center gap-5">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="text-[#2f2f2f] transition hover:text-primary"
                >
                  <Icon size={18} strokeWidth={2} />
                </Link>
              );
            })}
          </div>
        </div>

        <FooterLinkColumn title="Company" links={companyLinks} />
        <FooterLinkColumn title="Help" links={helpLinks} />
        <FooterLinkColumn title="Resources" links={resourceLinks} />
      </div>

      <div className="bg-[#250046] px-6 py-5 text-center">
        <p className="text-[14px] text-white">
          © Copyright 2024, All Rights Reserved by XYZ
        </p>
      </div>
    </footer>
  );
}
