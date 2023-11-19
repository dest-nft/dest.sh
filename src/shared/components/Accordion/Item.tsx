import React, { PropsWithChildren } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import Image from "next/image";

interface ItemProps extends PropsWithChildren {
  title: string;
}

export const Item = React.forwardRef<HTMLDivElement, ItemProps>(function Item(
  { title, children },
  forwardedRef,
) {
  return (
    <RadixAccordion.Item
      className="mb-2 mt-px overflow-hidden rounded-xl bg-gray first:mt-0 focus-within:relative focus-within:z-10 hover:bg-btnBGHeader"
      ref={forwardedRef}
      value={title}
    >
      <RadixAccordion.Header className="flex">
        <RadixAccordion.Trigger className="md:data-[state=open]:pb-[20px] data-[state=open]:pb-[16px] group flex flex-1  cursor-pointer items-center justify-between bg-gray p-5 text-start text-xl font-medium leading-none outline-none md:p-10 md:text-3xl">
          {title}
          <Image
            className="ms-4 flex h-auto w-4 shrink-0 object-contain transition-transform duration-200 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180 md:w-[30px]"
            src="/icons/arrow.svg"
            alt="arrow"
            width={30}
            height={30}
          />
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
      <RadixAccordion.Content className="overflow-hidden bg-gray text-[15px]">
        <div className="px-5 pb-4 pt-0 text-start text-base font-normal md:px-10 md:text-xl">
          {children}
        </div>
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
});
