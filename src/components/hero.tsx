import Image from "next/image";
import Link from "next/link";

const logos = [
  {
    id: 1,
    label: "Airbnb",
    src: "/images/logo.png",
    alt: "Airbnb",
    wrapperClass:
      "left-[18%] top-[16%] -rotate-[28deg] md:left-[18%] md:top-[14%]",
    cardClass: "bg-[#ff5a5f]",
    imageClass: "w-[76%] rotate-[20deg]",
  },
  {
    id: 2,
    label: "Blue icon",
    src: "/images/logo_4.png",
    alt: "Platform logo",
    wrapperClass:
      "right-[19%] top-[18%] rotate-[28deg] md:right-[18%] md:top-[16%]",
    cardClass: "bg-[#123f86]",
    imageClass: "w-[62%] rotate-[-28deg]",
  },
  {
    id: 3,
    label: "Navy icon",
    src: "/images/logo_2.png",
    alt: "Platform logo",
    wrapperClass:
      "left-[21%] bottom-[16%] -rotate-[24deg] md:left-[21%] md:bottom-[14%]",
    cardClass: "bg-[#112a63]",
    imageClass: "w-[64%] rotate-[24deg]",
  },
  {
    id: 4,
    label: "Tripadvisor style",
    src: "/images/logo_3.png",
    alt: "Tripadvisor style logo",
    wrapperClass:
      "right-[19%] bottom-[13%] rotate-[34deg] md:right-[18%] md:bottom-[12%]",
    cardClass: "bg-[#47dca0]",
    imageClass: "w-[64%] rotate-[-34deg]",
  },
];

const dots = [
  "left-[6%] top-[24%] bg-[#5a58e8]",
  "left-[14%] top-[62%] bg-[#ef5b61]",
  "left-[7%] bottom-[7%] bg-[#dfc64a]",
  "left-1/2 top-[18%] bg-[#3ac88d]",
  "left-[51%] bottom-[8%] bg-[#54d4e2]",
  "right-[13%] top-[37%] bg-[#e3ca44]",
  "right-[8%] bottom-[18%] bg-[#173d7a]",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Full section grid / cross-line background */}
      <Image
        src="/images/hero.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        className="object-cover"
      />

      {/* Center ellipse image */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-1 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/images/ellipse.png"
          alt=""
          aria-hidden="true"
          width={760}
          height={760}
          className="h-auto w-[320px] object-contain opacity-80 md:w-115 lg:w-155"
          priority
        />
      </div>

      {/* Floating dots */}
      {dots.map((dot, index) => (
        <span
          key={index}
          className={`absolute z-2 h-2.5 w-2.5 rounded-full shadow-sm ${dot}`}
        />
      ))}

      {/* Floating logo cards */}
      {logos.map((logo) => (
        <div
          key={logo.id}
          aria-label={logo.label}
          className={`absolute z-2 hidden md:block ${logo.wrapperClass}`}
        >
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-[14px] shadow-[0_12px_24px_rgba(0,0,0,0.10)] ${logo.cardClass}`}
          >
            <div className={`relative aspect-square ${logo.imageClass}`}>
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="56px"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-3 mx-auto flex min-h-155 max-w-360 items-center justify-center px-6 py-24 text-center md:min-h-175 md:px-10">
        <div className="max-w-215">
          <h1 className="text-[42px] font-extrabold leading-[0.95] tracking-[-0.04em] text-black md:text-[76px]">
            Airbnb Assistants For
          </h1>

          <h2 className="mt-3 text-[28px] font-medium leading-[1.05] tracking-[-0.03em] text-black md:text-[54px]">
            Property Management
          </h2>

          <p className="mx-auto mt-10 max-w-190 text-[15px] leading-[1.7] text-[#353535] md:text-[18px]">
            Automate guest communication, streamline daily operations, and
            manage your Airbnb properties with a smart assistant designed for
            modern hosts and property managers.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex min-h-13 items-center gap-2 rounded-md bg-[#ff4f87] px-7 py-3 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(255,79,135,0.22)] transition hover:-translate-y-0.5 hover:bg-[#f63c7a]"
            >
              Schedule A Meeting
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="#pricing"
              className="text-[15px] font-semibold text-black underline underline-offset-4"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
