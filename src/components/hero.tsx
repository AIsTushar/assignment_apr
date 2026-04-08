export default function HeroSection() {
  const logos = [
    {
      id: 1,
      label: "Airbnb",
      className: "left-[18%] top-[18%] -rotate-[28deg] bg-[#ff5a5f] text-white",
      content: (
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="text-xl font-bold leading-none">⌂</div>
          <div className="mt-1 text-[11px] font-semibold tracking-tight">
            airbnb
          </div>
        </div>
      ),
    },
    {
      id: 2,
      label: "Blue icon",
      className: "right-[20%] top-[20%] rotate-[28deg] bg-[#123f86] text-white",
      content: <div className="text-3xl font-black italic">B</div>,
    },
    {
      id: 3,
      label: "Navy icon",
      className:
        "left-[21%] bottom-[18%] -rotate-[24deg] bg-[#112a63] text-white",
      content: <div className="text-lg font-extrabold">〽</div>,
    },
    {
      id: 4,
      label: "Tripadvisor style",
      className:
        "right-[20%] bottom-[16%] rotate-[35deg] bg-[#47dca0] text-black",
      content: <div className="text-2xl font-black">◎◉</div>,
    },
  ];

  const dots = [
    "left-[6%] top-[24%] bg-[#5a58e8]",
    "left-[14%] top-[62%] bg-[#ef5b61]",
    "left-[7%] bottom-[6%] bg-[#dfc64a]",
    "left-1/2 top-[18%] bg-[#3ac88d]",
    "left-[51%] bottom-[7%] bg-[#54d4e2]",
    "right-[13%] top-[37%] bg-[#e3ca44]",
    "right-[7.5%] bottom-[18%] bg-[#173d7a]",
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e9e9e9_1px,transparent_1px),linear-gradient(to_bottom,#e9e9e9_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.3),rgba(255,255,255,0.15))]" />

      {dots.map((dot, index) => (
        <span
          key={index}
          className={`absolute h-2.5 w-2.5 rounded-full shadow-sm ${dot}`}
        />
      ))}

      {logos.map((logo) => (
        <div
          key={logo.id}
          aria-label={logo.label}
          className={`absolute flex h-11 w-11 items-center justify-center rounded-xl shadow-md md:h-14 md:w-14 ${logo.className}`}
        >
          {logo.content}
        </div>
      ))}

      <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center justify-center px-6 py-24 text-center md:px-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-[-0.03em] text-black md:text-6xl">
            Airbnb Assistants For
          </h1>
          <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-black md:text-4xl">
            Property Management
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-6 text-neutral-700 md:text-base">
            Automate guest communication, streamline daily operations, and
            manage your Airbnb properties with a smart assistant designed for
            modern hosts and property managers.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-md bg-[#ff4f87] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(255,79,135,0.25)] transition hover:-translate-y-0.5 hover:bg-[#f43f7d]">
              Schedule A Meeting
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="#pricing"
              className="text-sm font-medium text-black underline underline-offset-4"
            >
              See Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
