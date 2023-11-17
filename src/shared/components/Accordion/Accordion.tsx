import React, { ReactNode } from "react";
import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from "@radix-ui/react-accordion";
import Image from "next/image";
import "./Accordion.css";

interface AccordionItemProps {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

export function Accordion({ items }: AccordionProps) {
  return (
    <Root
      className="mx-auto w-full rounded-md border-none text-white"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      {items.map((item) => (
        <Item
          className="mb-2 mt-px overflow-hidden rounded-xl bg-gray first:mt-0 focus-within:relative focus-within:z-10 hover:bg-btnBGHeader"
          key={item.title}
          value={item.title}
        >
          <Header className="flex">
            <Trigger className="accordion-trigger group flex flex-1  cursor-pointer items-center justify-between bg-gray p-5 text-start text-xl font-medium leading-none outline-none md:p-10 md:text-3xl">
              {item.title}
              <Image
                className="ms-4 flex h-auto w-4 shrink-0 object-contain transition-transform duration-200 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180 md:w-[30px]"
                src="/icons/arrow.svg"
                alt="arrow"
                width={30}
                height={30}
              />
            </Trigger>
          </Header>
          <Content className="overflow-hidden bg-gray text-[15px] text-white">
            <div className="px-5 pb-4 pt-0 text-start text-base font-normal md:px-10 md:text-xl">
              {item.content}
            </div>
          </Content>
        </Item>
      ))}
    </Root>
  );
}
