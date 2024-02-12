import { CatCard } from "./CatCard";
import { ArrowDynamic } from "./ArrowDynamic";

export function DynamicNftSection() {
  return (
    <div className="dinamic-section mb-32 md:mb-44 xl:mb-64">
      <div className="title mb-14 md:mb-20 xl:mb-28">
        <h2
          className="mb-7 text-center font-clashDisplay text-3xl font-semibold md:text-7xl"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Dynamic NFT
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
      <div className="content mx-auto flex items-center justify-center rounded-2xl">
        <ul className="flex flex-col justify-center gap-8 lg:flex-row">
          <li className="relative flex h-[400px] w-[296px] items-center justify-start rounded-[14px] bg-gray">
            <div className="ml-5 flex object-contain">
              <CatCard />
            </div>
            <div className="absolute bottom-[-50px] right-1/2 z-10 flex h-[72px] w-[72px] translate-x-1/2 rotate-90 object-contain lg:bottom-[50%] lg:right-[-15px] lg:translate-y-1/2 lg:rotate-0">
              <ArrowDynamic />
            </div>
          </li>
          <li
            className={`relative flex h-[400px] w-[296px] items-center justify-start rounded-[14px] bg-gray bg-[url('../public/icons/snow.gif')] bg-cover bg-no-repeat`}
          >
            <div className="absolute bottom-[-50px] right-1/2 z-10 flex h-[72px] w-[72px] translate-x-1/2 rotate-90 object-contain lg:bottom-[50%] lg:right-[-15px] lg:translate-y-1/2 lg:rotate-0">
              <ArrowDynamic />
            </div>
          </li>

          <li
            className={`relative flex h-[400px] w-[296px] items-center justify-start rounded-[14px] bg-gray bg-[url('../public/icons/bg-desert.png')] bg-cover bg-no-repeat`}
          ></li>
        </ul>
      </div>
    </div>
  );
}
