import Image from "next/image";

const logos = [
  { name: "Airbnb", src: "/companies/company_1.svg", width: 116, height: 36 },
  {
    name: "Booking.com",
    src: "/companies/company_2.svg",
    width: 182,
    height: 34,
  },
  { name: "Vrbo", src: "/companies/company_3.svg", width: 132, height: 36 },
  {
    name: "Tripadvisor",
    src: "/companies/company_4.svg",
    width: 182,
    height: 40,
  },
  { name: "Agoda", src: "/companies/company_5.svg", width: 122, height: 36 },
  { name: "Expedia", src: "/companies/company_6.svg", width: 166, height: 40 },
  { name: "HomeToGo", src: "/companies/company_7.svg", width: 124, height: 40 },
];

function LogoRow() {
  return (
    <>
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex min-w-35 items-center justify-center px-6 md:min-w-45 md:px-8"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            className="h-auto max-h-10 w-auto object-contain"
          />
        </div>
      ))}
    </>
  );
}

export default function TrustedBySection() {
  return (
    <section className="py-10 md:py-12">
      <div className="">
        <div className="max-w-350 mx-auto w-full">
          <h2 className="text-center text-[20px] font-semibold text-[#1f2430] md:text-[24px]">
            Trusted by leaders in 50+ industries
          </h2>
        </div>

        <div className="mt-8 overflow-hidden bg-gray-100">
          <div className="trusted-marquee flex w-max items-center py-5 md:py-6">
            <LogoRow />
            <LogoRow />
          </div>
        </div>
      </div>
    </section>
  );
}
