import React, { PropsWithChildren } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";

export function Root({ children }: PropsWithChildren) {
  return (
    <RadixAccordion.Root
      className="mx-auto w-full rounded-md border-none"
      type="single"
      collapsible
    >
      {children}
    </RadixAccordion.Root>
  );
}
