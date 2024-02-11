import { ValueCard } from "@/app/_components/ValuesSection/ValueCard";

export function ValuesSection() {
  return (
    <div className="values-section mb-32 flex flex-wrap gap-16 md:mb-44 md:flex-nowrap xl:mb-64">
      <div className="title md:max-w-[425px]">
        <h2
          className="mb-7 text-start font-clashDisplay text-3xl font-semibold md:text-7xl"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          DEST Values
        </h2>
        <p
          className="text-start text-base font-normal opacity-60 md:text-xl"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Revolutionizing SaaS Solutions for the Future
        </p>
      </div>
      <ul className="flex flex-wrap gap-4 md:gap-9">
        <ValueCard name={"Multichain support"} />
        <ValueCard name={"Out-of-the-box Solutions"} />
        <ValueCard name={"Highly Customizable"} />
        <ValueCard name={"Developer Friendly"} />
      </ul>
    </div>
  );
}
