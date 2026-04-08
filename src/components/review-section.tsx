import Image from "next/image";

type Review = {
  name: string;
  review: string;
  avatar: string;
};

const reviews: Review[] = [
  {
    name: "Jenny Wilson",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/reviews/jenny.png",
  },
  {
    name: "Esther Howard",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/reviews/esther.png",
  },
  {
    name: "Robert Fox",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/reviews/robert.png",
  },
];

function Stars() {
  return (
    <div className="mt-4 flex items-center gap-1" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className="text-[13px] leading-none text-[#f5a623]">
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-[14px] bg-white px-6 py-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)]">
      <div className="flex items-start gap-4">
        <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-full">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            className="object-cover"
            sizes="72px"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-[22px] font-bold leading-tight text-[#1f2430]">
            {review.name}
          </h3>

          <p className="mt-3 text-[14px] leading-[1.6] text-[#2f2f2f]">
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
    <section className=" py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-[92%]">
        <div className="mx-auto max-w-190 text-center">
          <h2 className="text-[32px] font-bold leading-tight text-[#1f2430] md:text-[44px]">
            Check Our Clients <span className="text-primary">Review</span>
          </h2>

          <p className="mt-4 text-[14px] leading-[1.7] text-[#3e3e3e] md:text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
