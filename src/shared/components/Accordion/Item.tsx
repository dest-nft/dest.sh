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
      className="mb-4 overflow-hidden rounded-xl bg-gray last:mb-0 hover:bg-btnBGHeader"
      ref={forwardedRef}
      value={title}
    >
      <RadixAccordion.Header className="flex">
        <RadixAccordion.Trigger className="group flex flex-1 cursor-pointer items-center justify-between p-5 text-xl font-medium leading-none data-[state=open]:pb-4 md:p-10 md:text-3xl md:data-[state=open]:pb-5">
          {title}
          <Image
            className="w-4 transition-transform duration-200 group-data-[state=open]:rotate-180 md:w-[30px]"
            src="/icons/arrow.svg"
            alt="arrow"
            width={30}
            height={30}
          />
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
      <RadixAccordion.Content className="px-5 pb-5 text-justify text-base font-normal md:px-10 md:pb-10 md:text-xl">
        {children}
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
});
