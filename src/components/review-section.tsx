"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Review = {
  id: number;
  name: string;
  review: string;
  avatar: string;
};

const baseReviews: Review[] = [
  {
    id: 1,
    name: "Jenny Wilson",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/person/person_1.png",
  },
  {
    id: 2,
    name: "Esther Howard",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/person/person_2.png",
  },
  {
    id: 3,
    name: "Robert Fox",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/person/person_3.png",
  },
];

// Duplicate with unique slide keys so Swiper loop has enough slides
const reviews = Array.from({ length: 3 }, (_, copyIndex) =>
  baseReviews.map((review) => ({
    ...review,
    slideKey: `${review.id}-${copyIndex}`,
  })),
).flat();

function Stars() {
  return (
    <div className="mt-4 flex items-center gap-1" aria-label="4 star rating">
      {Array.from({ length: 4 }).map((_, index) => (
        <span key={index} className="text-[13px] leading-none text-[#F5A623]">
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  isActive,
}: {
  review: Review;
  isActive?: boolean;
}) {
  return (
    <article
      className={[
        "flex h-[158px] items-center rounded-[12px] px-7 py-8 transition-all duration-500",
        isActive
          ? "bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
          : "bg-[#f3f3f3] shadow-none",
      ].join(" ")}
    >
      <div className="flex items-center gap-5">
        <div className="relative h-[78px] w-[78px] shrink-0 overflow-hidden rounded-full">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            className="object-cover"
            sizes="78px"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-[18px] font-bold leading-tight text-[#171717]">
            {review.name}
          </h3>

          <p className="mt-2 max-w-[260px] text-[14px] leading-[1.45] text-[#2E2E2E]">
            {review.review}
          </p>

          <Stars />
        </div>
      </div>
    </article>
  );
}

export default function ReviewSection() {
  return (
    <section className="overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-[92%] max-w-[1400px]">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[32px] font-bold leading-tight text-[#1f2430] md:text-[44px]">
            Check Our Clients <span className="text-[#F14668]">Review</span>
          </h2>

          <p className="mt-4 text-[14px] leading-[1.7] text-[#3e3e3e] md:text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="review-slider mt-14">
          <Swiper
            modules={[Autoplay]}
            loop
            centeredSlides
            grabCursor
            speed={800}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={18}
            slidesPerView={1.08}
            breakpoints={{
              768: {
                slidesPerView: 2.15,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.45,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 2.7,
                spaceBetween: 26,
              },
            }}
            className="!overflow-visible"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.slideKey}>
                {({ isActive }) => (
                  <ReviewCard review={review} isActive={isActive} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
