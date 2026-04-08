"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes. You can upgrade or downgrade your plan whenever you need, depending on your business requirements.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel anytime. Your subscription will remain active until the end of the current billing period unless stated otherwise.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, additional business information such as VAT number, address, or company details can usually be added to your invoice.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is charged either monthly or yearly depending on the plan you choose. You can manage billing details from your account settings.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can update your account email in your profile or account settings area after verifying the new email address.",
  },
];

type FaqRowProps = {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
};

function FaqRow({ item, isOpen, onToggle, index }: FaqRowProps) {
  const contentId = `faq-content-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-[#f2ccd5] py-5 last:border-b-0">
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="flex w-full items-start justify-between gap-4 text-left cursor-pointer"
      >
        <span className="pr-4 text-sm font-bold leading-[1.4] text-black md:text-lg">
          {item.question}
        </span>

        <span
          className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary text-primary transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-190 pt-3 pr-10 text-[15px] leading-7 text-[#8c8c8c] md:text-[16px]">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-[92%] max-w-310">
        <div className="rounded-3xl bg-gray-50 px-5 py-12 sm:px-8 md:px-12 md:py-14 lg:px-16 lg:py-16">
          <div className="text-center">
            <h2 className="text-2xl font-semibold leading-tight text-black md:text-4xl">
              Frequently asked <span className="text-primary">questions</span>
            </h2>

            <p className="mt-4 text-lg text-black md:text-xl">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-215 md:mt-14">
            {faqs.map((item, index) => (
              <FaqRow
                key={item.question}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((prev) => (prev === index ? null : index))
                }
              />
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-gray-50 px-5 py-10 text-center sm:px-8 md:px-12 md:py-12">
          <div className="mx-auto flex w-fit -space-x-3">
            <div className="flex items-end">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src="/person/Avatar_3.png"
                  alt="User 1"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative z-10 -mt-3 -ml-3 h-14 w-14 overflow-hidden rounded-full">
                <Image
                  src="/person/Avatar_1.png"
                  alt="User 2"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative -ml-3 h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src="/person/Avatar_2.png"
                  alt="User 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <h3 className="mt-5 text-[24px] font-bold text-[#161c2d]">
            Still have Questions?
          </h3>

          <p className="mx-auto mt-3 max-w-140 text-[15px] leading-7 text-[#9a9a9a] md:text-[16px]">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-[15px] font-semibold text-white transition hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
