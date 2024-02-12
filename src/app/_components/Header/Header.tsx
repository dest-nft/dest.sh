import { NavigationMenu } from "./NavigationMenu";
import pencil from "@/../public/icons/pencil.svg";
import { DestLogo } from "@/app/_components/Header/DestLogo";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 z-50 h-20 w-full bg-black py-3 md:h-[88px] lg:h-[104px] lg:py-5">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="wrapper flex items-center justify-between">
          <DestLogo />
          <div className="nav flex items-center gap-5">
            <a
              className="hidden h-16 w-[74px] items-center rounded-xl bg-btnBGHeader px-5 py-4 font-medium uppercase opacity-90 hover:opacity-100 md:flex"
              href="https://devbrother.com/"
              target="_blank"
              rel="noreferrer"
            >
              faq
            </a>
            <div className="flex h-14 items-center gap-2 rounded-xl bg-btnBG p-[6px] md:h-16">
              <a
                className="flex h-[42px] w-full items-center justify-center rounded-xl bg-green px-4 text-sm font-medium text-black outline-none hover:bg-yellow md:h-[52px] md:px-5 lg:text-base"
                type="button"
                href="#contact"
              >
                Contact Us
                <div className="ms-2 flex object-contain">
                  <Image
                    src={pencil}
                    className="h-auto w-4 object-fill md:w-5"
                    width={"17"}
                    height={"16"}
                    alt="pencil"
                  />
                </div>
              </a>
              <NavigationMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
