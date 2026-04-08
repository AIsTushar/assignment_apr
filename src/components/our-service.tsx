import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Manage Property Listings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/images/service-1.png",
    href: "#",
  },
  {
    title: "Manage Customer Bookings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/images/service-2.png",
    href: "#",
  },
  {
    title: "Schedule House Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/images/service-3.png",
    href: "#",
  },
  {
    title: "Monitor Guest Reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/images/service-4.png",
    href: "#",
  },
  {
    title: "Track & Report Expenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/images/service-5.png",
    href: "#",
  },
  {
    title: "Guest Inquiry & Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/images/service-6.png",
    href: "#",
  },
];

export default function OurService() {
  return (
    <section className="py-2">
      <div className="mx-auto w-[92%] max-w-327.5">
        <div className="mx-auto max-w-175 text-center">
          <h2 className="text-[32px] font-bold leading-tight text-[#1f1f1f] md:text-[40px]">
            Our <span className="text-primary">Service</span>
          </h2>

          <p className="mt-4 text-[14px] leading-[1.7] text-[#4b4b4b] md:text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[14px] border border-[#f7c6d1] bg-white px-6 py-8  transition duration-300 hover:border-none hover:shadow-md md:px-7 md:py-9"
            >
              <div className="mb-8">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={84}
                  height={84}
                  className="h-18 w-18 object-contain"
                />
              </div>

              <h3 className="max-w-80 text-[26px] font-bold leading-[1.2] text-text md:text-[30px]">
                {service.title}
              </h3>

              <p className="mt-5 max-w-72.5 text-[14px] leading-[1.65] text-[#444444]">
                {service.description}
              </p>

              <div className="mt-8">
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-2 text-[13px] font-medium text-priary transition hover:bg-primary hover:text-white"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
