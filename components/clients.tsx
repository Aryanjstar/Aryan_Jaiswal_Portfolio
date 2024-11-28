import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data";

export const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        <span className="text-purple">Career Highlights </span> and Certifications
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative flex h-[50vh] flex-col items-center justify-center overflow-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
          {/* Static content or removed companies mapping */}
          <div className="flex max-w-32 gap-2 md:max-w-60">
            {/* <Image
              height={29}
              width={43}
              src="/infosys.png"
              alt="Infosys Springboard logo"
              className="w-5 md:w-10"
            /> */}
            {/* <Image
              height={28}
              width={131}
              src="/infosys.png"
              alt="Infosys Springboard"
              className="w-20 md:w-24"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
