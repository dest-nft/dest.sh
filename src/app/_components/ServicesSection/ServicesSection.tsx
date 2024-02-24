import {
  Root as AccordionRoot,
  Item as AccordionItem,
} from "@/shared/components/Accordion";
import { Anchor } from "@/shared/components/Anchor";
import { Emoji } from "@/shared/components/Emoji";

export function ServicesSection() {
  const services = [
    {
      title: "Creators panel",
      description: "Creators panel",
    },
    {
      title: "Inventory as service",
      description: "Inventory as service",
    },
  ];

  return (
    <>
      <Anchor name="services" />
      <div className="accordion-section mb-32 md:mb-44 xl:mb-64">
        <div className="title mb-16">
          <h2
            className="font-ClashDisplay mb-6 text-start text-3xl font-semibold md:text-7xl"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Services
          </h2>
          <p
            className="text-start text-base font-normal opacity-60 md:text-xl"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Revolutionizing SaaS Solutions for the Future
          </p>
        </div>

        <div className="wrapper flex flex-wrap justify-center gap-9 lg:flex-row-reverse lg:flex-nowrap lg:justify-end lg:gap-16 xl:gap-28">
          <div className="mx-0 my-auto flex h-60 w-60 shrink-0 rounded-full object-contain md:h-[440px] md:w-[440px] lg:h-[300px] lg:w-[300px] xl:h-[440px] xl:w-[440px]">
            <Emoji type="tongue-cat" className="h-full w-full" />
          </div>
          <div className="accordion-wrapper w-full space-y-2 lg:w-2/3 xl:w-1/2">
            {services.map((service, index) => (
              <AccordionRoot key={index}>
                <AccordionItem title={service.title}>
                  {service.description}
                </AccordionItem>
              </AccordionRoot>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
