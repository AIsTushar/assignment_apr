import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

type Step = {
  number: string;
  title: string;
  icon: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Add requirements & sign up today",
    icon: "/images/step-1.png",
  },
  {
    number: "02",
    title: "Connect with your CSM & onboarding team",
    icon: "/images/step-2.png",
  },
  {
    number: "03",
    title: "Meet your STR Assistant next week",
    icon: "/images/step-3.png",
  },
];

const reasons = [
  "Brilliant Client Service",
  "Flexibility & Adaptability",
  "We make it Personal",
  "We have expert in our team",
];

function StepCard({ step }: { step: Step }) {
  return (
    <article className="flex flex-col items-center text-center">
      <div className="relative flex h-46 w-full max-w-64 items-center justify-center rounded-[10px] border-2 border-primary/8 bg-transparent">
        <div className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-primary bg-white text-[24px] font-semibold leading-none text-[#1e1e1e]">
          {step.number}
        </div>

        <div className="relative">
          <Image src={step.icon} alt={step.title} width={76} height={76} />
        </div>
      </div>

      <h3 className="mt-5 max-w-55 text-[16px] font-semibold leading-[1.45] text-[#1f2430] md:text-[17px]">
        {step.title}
      </h3>
    </article>
  );
}

export default function GettingStartedSection() {
  return (
    <section className="py-4 md:py-6 lg:py-8">
      <div className="mx-auto w-[92%] max-w-310">
        {/* Top Section */}
        <div className="text-center">
          <h2 className="text-[30px] font-bold leading-tight text-[#1f2430] md:text-[42px]">
            Getting Started is <span className="text-primary">Easy</span>
          </h2>

          <p className="mx-auto mt-4 max-w-175 text-[14px] leading-[1.7] text-[#444444] md:text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>

        {/* Bottom CTA / Reasons Section */}
        <div className="mt-16 overflow-hidden rounded-[28px] border border-[#f2cad3] bg-[#fdeff3] px-6 py-8 md:px-10 md:py-10 lg:mt-20 lg:px-12 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            {/* LEFT */}
            <div className="max-w-130">
              <h3 className="text-[34px] font-bold leading-[1.2] text-[#1f2430] md:text-[42px]">
                Few Reasons Why you Choose us?
              </h3>

              <p className="mt-6 max-w-120 text-[14px] leading-[1.7] text-[#444444] md:text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>

              <ul className="mt-7 space-y-4">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f8cfd8] text-primary">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-[15px] font-medium text-[#1f2430] md:text-[16px]">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-md bg-primary px-6 py-3 text-[14px] font-semibold text-white transition hover:opacity-90"
              >
                Schedule A Meeting
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-end">
              <div className="w-full max-w-130">
                <Image
                  src="/images/getting-started.png"
                  alt="Professional team member"
                  width={642}
                  height={465}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
