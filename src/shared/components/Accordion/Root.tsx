import React, { PropsWithChildren } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";

export function Root({ children }: PropsWithChildren) {
  return (
    <RadixAccordion.Root type="single" collapsible>
      {children}
    </RadixAccordion.Root>
  );
}
