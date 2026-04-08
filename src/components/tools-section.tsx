import Image from "next/image";

const tools = [
  { name: "PriceLabs", logo: "/images/tool-2.png" },
  { name: "Wheelhouse", logo: "/images/tool-3.png" },
  { name: "Beyond Pricing", logo: "/images/tool-4.png" },
  { name: "Hostfully", logo: "/images/tool-5.png" },
  { name: "Guesty For Hosts", logo: "/images/tool-6.png" },
  { name: "Lodgify", logo: "/images/tool-2.png" },
  { name: "Hostfully Duplicate", logo: "/images/tool-3.png" },
  { name: "Guesty For Hosts Duplicate", logo: "/images/tool-4.png" },
  { name: "Lodgify Duplicate", logo: "/images/tool-6.png" },
];

export default function ToolsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto">
        <div className="mb-32 w-[92%] mx-auto">
          <div className="mx-auto text-center max-w-180">
            <h2 className="text-[32px] font-bold leading-tight text-[#1f2430] md:text-[42px]">
              Our <span className="text-primary">Tools</span>
            </h2>

            <p className="mt-4 text-[14px] text-center leading-[1.7] text-gray-800 md:text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="mt-32 w-full bg-gray-50 py-12">
          <div className="mx-auto grid max-w-235 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <article
                key={tool.name}
                className="flex h-22.5 items-center justify-center rounded-2xl bg-white px-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-9.5 w-40 md:h-10.5 md:w-45">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    fill
                    className="object-contain"
                    sizes="180px"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
