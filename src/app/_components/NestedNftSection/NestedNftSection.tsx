import Image from "next/image";
import leftCat from "@/../public/icons/cat-left.png";
import mainCat from "@/../public/icons/cat-main.png";
import rightCat from "@/../public/icons/cat-right.png";

export function NestedNftSection() {
  return (
    <div className="nested-section mb-32 md:mb-44 xl:mb-64">
      <div className="title mb-14 md:mb-20 xl:mb-28">
        <h2
          className="mb-7 text-center font-clashDisplay text-3xl font-semibold md:text-7xl"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Nested NFT
        </h2>
        <p
          className="text-center text-base font-normal opacity-60 md:text-xl"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Revolutionizing SaaS Solutions for the Future
        </p>
      </div>
      <div className="content mx-auto flex h-[320px] max-w-[850px] items-center justify-evenly rounded-2xl bg-gray py-32 sm:h-[405px] md:py-44 xl:w-[850px] xl:py-72">
        <div
          className="flex object-contain"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1200"
          data-aos-anchor-placement="bottom-bottom"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="1500"
          // data-aos-anchor-placement="bottom-bottom"
        >
          <Image src={leftCat} width={"230"} height={"310"} alt="logo" />
        </div>
        <div className="-mr-24 flex object-contain ">
          <Image src={mainCat} width={"263"} height={"314"} alt="logo" />
        </div>

        <div
          className="flex object-contain"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1200"
          data-aos-anchor-placement="bottom-bottom"
          // data-aos-offset="0"
          // data-aos-anchor-placement="center-center"
          // data-aos-delay="1300"
        >
          <Image src={rightCat} width={"298"} height={"347"} alt="logo" />
        </div>
      </div>
    </div>
  );
}
