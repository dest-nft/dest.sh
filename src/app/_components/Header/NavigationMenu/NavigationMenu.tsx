"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "./NavigationMenu.css";
import dots from "@/../public/icons/menu-dots.svg";
import Image from "next/image";
import Link from "next/link";

export function NavigationMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="IconButton inline-flex h-[42px] w-[42px] shrink-0 cursor-pointer items-center justify-center rounded-xl bg-btnBGHeader opacity-90 hover:opacity-100 md:h-[52px] md:w-[52px]"
          aria-label="Customise options"
        >
          <div className="flex object-contain">
            <Image
              src={dots}
              className="logo h-5 w-auto"
              width={"20"}
              height={"20"}
              alt="menu toggle dots"
            />
          </div>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="DropdownMenuContent flex flex-col gap-2 rounded-xl bg-btnBGHeaderHEX p-[6px]"
          sideOffset={7}
        >
          <DropdownMenu.Item className="DropdownMenuItem mb-2 flex h-12 cursor-pointer items-center justify-between rounded-xl bg-btnBGHeaderHEXItem pl-5 pr-1 text-base font-medium text-white  outline-none hover:text-green">
            MENU
            <button
              className="IconButton inline-flex h-[42px] w-[42px] shrink-0 cursor-pointer items-center justify-center rounded-xl bg-btnBG opacity-100 hover:opacity-100"
              aria-label="Customise options"
            >
              <div className="flex object-contain">
                <Image
                  src={dots}
                  className="logo h-5 w-auto"
                  width={"20"}
                  height={"20"}
                  alt="menu toggle dots"
                />
              </div>
            </button>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem flex h-12 cursor-pointer items-center rounded-xl bg-btnBGHeaderHEXItem px-5 text-base font-medium text-white outline-none  hover:text-green md:hidden">
            <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-white">
              <span className="h-2 w-2 rounded-full bg-green"></span>
            </div>
            FAQ
          </DropdownMenu.Item>
          <Link href={"#concept"}>
            <DropdownMenu.Item className="DropdownMenuItem flex h-12 cursor-pointer items-center rounded-xl bg-btnBGHeaderHEXItem px-5 text-base font-medium text-white  outline-none hover:text-green">
              <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-transparent">
                <span className="h-2 w-2 rounded-full bg-green"></span>
              </div>
              Concept
            </DropdownMenu.Item>
          </Link>
          <Link href={"#how-it-works"}>
            <DropdownMenu.Item className="DropdownMenuItem flex h-12 cursor-pointer items-center rounded-xl bg-btnBGHeaderHEXItem px-5 text-base font-medium text-white  outline-none hover:text-green">
              <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-transparent">
                <span className="h-2 w-2 rounded-full bg-green"></span>
              </div>
              How it works?
            </DropdownMenu.Item>
          </Link>
          <Link href={"#values"}>
            <DropdownMenu.Item className="DropdownMenuItem flex h-12 cursor-pointer items-center rounded-xl bg-btnBGHeaderHEXItem px-5 text-base font-medium text-white  outline-none hover:text-green">
              <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-transparent">
                <span className="h-2 w-2 rounded-full bg-green"></span>
              </div>
              Values
            </DropdownMenu.Item>
          </Link>
          <Link href={"#services"}>
            <DropdownMenu.Item className="DropdownMenuItem flex h-12 cursor-pointer items-center rounded-xl bg-btnBGHeaderHEXItem px-5 text-base font-medium text-white  outline-none hover:text-green">
              <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-transparent">
                <span className="h-2 w-2 rounded-full bg-green"></span>
              </div>
              Services
            </DropdownMenu.Item>
          </Link>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
