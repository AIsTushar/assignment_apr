"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Feature = {
  text: string;
  included: boolean;
};

type Plan = {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  href: string;
  featured?: boolean;
  features: Feature[];
};

const plans: Plan[] = [
  {
    name: "Freebie",
    description:
      "Ideal for individuals who need quick access to basic features.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    href: "#",
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: false },
      { text: "Unlimited Sharing", included: false },
      { text: "Upload graphics & video in up to 4k", included: false },
      { text: "Unlimited Projects", included: false },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Professional",
    description:
      "Ideal for individuals who need advanced features and tools for client work.",
    monthlyPrice: 25,
    yearlyPrice: 19,
    href: "#",
    featured: true,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Enterprise",
    description:
      "Ideal for businesses who need personalized services and security for large teams.",
    monthlyPrice: 100,
    yearlyPrice: 75,
    href: "#",
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: true },
      { text: "Create teams to collaborate on designs", included: true },
    ],
  },
];

function formatPrice(price: number) {
  return `$${price}`;
}

function FeatureIcon({
  included,
  featured,
}: {
  included: boolean;
  featured?: boolean;
}) {
  if (included) {
    return (
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
          featured ? "bg-white/25 text-white" : "bg-[#ffd7e0] text-primary"
        }`}
        aria-hidden="true"
      >
        ✓
      </span>
    );
  }

  return (
    <span
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
        featured ? "bg-white/20 text-white" : "bg-[#f3f4f6] text-[#4b5563]"
      }`}
      aria-hidden="true"
    >
      ×
    </span>
  );
}

function PricingCard({ plan, yearly }: { plan: Plan; yearly: boolean }) {
  const featured = plan.featured;
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border px-6 py-7 md:px-8 md:py-8 ${
        featured
          ? "border-primary bg-primary text-white shadow-lg"
          : "border-[#f5c8d2] bg-white text-[#1f2430]"
      }`}
    >
      <div>
        <h3
          className={`text-[20px] font-bold ${featured ? "text-white" : "text-[#222831]"}`}
        >
          {plan.name}
        </h3>

        <p
          className={`mt-3 max-w-[90%] text-[15px] leading-6 ${
            featured ? "text-white/85" : "text-[#7b8494]"
          }`}
        >
          {plan.description}
        </p>

        <div className="mt-7 flex items-end gap-2">
          <span
            className={`text-[56px] font-bold leading-none ${featured ? "text-white" : "text-[#20242f]"}`}
          >
            {formatPrice(price)}
          </span>
          <span
            className={`mb-2 text-[15px] ${
              featured ? "text-white/85" : "text-[#8b93a1]"
            }`}
          >
            / Month
          </span>
        </div>

        <Link
          href={plan.href}
          className={`mt-7 inline-flex h-12 w-full items-center justify-center rounded-md border text-[15px] font-semibold transition ${
            featured
              ? "border-white bg-white text-primary hover:opacity-90"
              : "border-primary bg-white text-primary hover:bg-primary hover:text-white"
          }`}
        >
          Get Started Now
        </Link>
      </div>

      <ul className="mt-8 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature.text} className="flex items-start gap-3">
            <FeatureIcon included={feature.included} featured={featured} />
            <span
              className={`text-[15px] leading-6 ${
                feature.included
                  ? featured
                    ? "text-white"
                    : "text-[#2d3440]"
                  : featured
                    ? "text-white/85"
                    : "text-[#a8b0bf]"
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="py-8 md:py-20 lg:py-12">
      <div className="mx-auto w-[92%] max-w-310">
        <div className="text-center">
          <h2 className="text-[34px] font-bold leading-tight text-[#1f2430] md:text-[46px]">
            Airbnb Assistent <span className="text-primary">pricing</span>
          </h2>

          <p className="mt-4 text-[18px] text-[#3f4652]">
            Choose a plan that’s right for you
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <span className="text-[15px] font-medium text-[#2d3440]">
            Pay Monthly
          </span>

          <button
            type="button"
            onClick={() => setYearly((prev) => !prev)}
            aria-pressed={yearly}
            aria-label={`Switch to ${yearly ? "monthly" : "yearly"} billing`}
            className={`relative h-8 w-14 rounded-full transition ${
              yearly ? "bg-primary" : "bg-[#c9c9cf]"
            }`}
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                yearly ? "left-7" : "left-1"
              }`}
            />
          </button>

          <div className="flex items-center gap-3">
            <span className="text-[15px] font-medium text-[#2d3440]">
              Pay Yearly
            </span>
            <Image
              src="/images/save.png"
              alt="Arrow Right"
              width={128}
              height={128}
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} yearly={yearly} />
          ))}
        </div>
      </div>
    </section>
  );
}
