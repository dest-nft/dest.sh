import { CatCard } from "./CatCard";

export function IntroductionSection() {
  return (
    <div className="hero-section relative mb-[256px] mt-40 flex flex-col items-center gap-16 md:mb-[550px] md:mt-64 xl:mb-[550px]">
      <div className="title relative">
        <h1
          className="mb-16 max-w-3xl text-start font-clashDisplay text-4xl font-semibold leading-none md:mb-24 md:text-[90px] lg:max-w-5xl xl:mb-44 xl:max-w-6xl"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Empowering Your Business with Dynamic Nested NFTs
        </h1>
        <p
          className="relative text-start text-base font-normal opacity-60 after:absolute after:-top-9 after:block
                 after:h-[1px] after:w-full after:bg-green after:content-[''] md:text-xl md:after:w-72"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Revolutionizing SaaS Solutions for the Future
        </p>
      </div>
      <div className="imgs-wrap relative ml-[70px] md:absolute md:right-0 md:top-96 md:ml-[0px] xl:top-[250px]">
        <CatCard />
      </div>
    </div>
  );
}
