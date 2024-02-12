import ellipseCat from "@/../public/icons/ellipse-content.svg";
import arrowRight from "@/../public/icons/arrow-right.svg";
import mainCat from "@/../public/icons/cat-main.png";
import glasses from "@/../public/icons/glasses.png";
import { Anchor } from "@/shared/components/Anchor";
import Image from "next/image";

export function HowItWorksSection() {
  return (
    <>
      <Anchor name="how-it-works" />
      <div className="how-section mb-32 flex flex-col items-center gap-20 md:mb-44 xl:mb-64">
        <div className="title mx-auto text-center md:mx-0 md:text-start">
          <h2
            className="mb-7 font-clashDisplay text-3xl font-semibold leading-none md:text-[90px]"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            How it works?
          </h2>
          <p
            className="text-base font-normal opacity-60 md:text-xl"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Revolutionizing SaaS Solutions for the Future
          </p>
        </div>
        <div className="imgs-wrap relative">
          <div className="flex object-contain md:h-[400px] md:w-auto">
            <div className="absolute left-[50%] top-[50%] flex h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2 object-contain md:left-[0%] md:h-[1037px] md:w-[1236px]">
              <Image
                src={ellipseCat}
                className="logo h-full w-auto"
                width={"470"}
                height={"271"}
                alt="logo"
              />
            </div>

            <div className="flex h-[200px] object-contain md:h-[400px]">
              <Image
                src={mainCat}
                className="logo relative h-full w-auto"
                width={"263"}
                height={"314"}
                alt="logo"
              />
            </div>

            <div className="absolute right-[-70px] top-[130px] flex h-[47px] object-contain md:right-[-210px] md:top-[235px] md:h-[90px] md:w-auto">
              <Image
                src={glasses}
                className="logo h-full w-auto"
                width={"148"}
                height={"65"}
                alt="logo"
              />
            </div>

            <div className="absolute left-[-35px] top-[-15px] flex h-[34px] object-contain md:left-[-100px] md:top-[-30px] md:h-[60px] md:w-auto">
              <Image
                src={arrowRight}
                className="logo h-full w-auto"
                width={"65"}
                height={"64"}
                alt="logo"
              />
              <p className="absolute left-[-25px] top-[25px] font-clashDisplay text-base font-normal leading-none md:left-[-40px] md:top-[50px] md:text-2xl">
                Base Token
              </p>
            </div>

            <div className="absolute bottom-[68px] right-[-25px] flex h-[34px] object-contain md:bottom-[190px] md:right-[-120px] md:h-[60px] md:w-auto">
              <Image
                src={arrowRight}
                className="logo h-full w-auto"
                width={"65"}
                height={"64"}
                alt="logo"
              />
              <p className="absolute left-[-15px] top-[85px] font-clashDisplay text-base font-normal leading-none md:left-[0px] md:top-[190px] md:text-2xl">
                Nestable Token
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
