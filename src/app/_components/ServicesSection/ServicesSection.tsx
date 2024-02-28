import {
  Root as AccordionRoot,
  Item as AccordionItem,
} from "@/shared/components/Accordion";
import { Anchor } from "@/shared/components/Anchor";
import { Emoji } from "@/shared/components/Emoji";

export function ServicesSection() {
  const services = [
    {
      title: "Multi-Standard support",
      description:
        "Multi-Standard support within the DEST protocol ensures compatibility with a variety of blockchain protocols and standards, including ERC1155 Multi-Token Standart, ERC6551 Token Bound Account and RMRK NFT Standard. This feature enables developers to leverage different blockchain networks and standards when creating and managing DEST tokens, providing flexibility and interoperability within the ecosystem.",
    },
    {
      title: "Rendering Engine",
      description:
        "DEST boasts versatile support for rendering engines, encompassing both 2D and 3D capabilities, alongside the flexibility for custom implementations to meet specific business needs. This comprehensive approach ensures seamless visualization of DEST tokens across platforms while empowering developers to tailor token experiences for diverse applications.",
    },
    {
      title: "Creators panel",
      description:
        "The Creators Panel is a powerful tool for crafting and managing DEST tokens. It offers an intuitive interface for creating various types of tokens, organizing token collections, and customizing nesting requirements. With built-in analytics and role-based access control, users can efficiently manage their token portfolios while ensuring security and privacy. Integrated with other services, the Creators Panel provides a comprehensive solution for token creators, offering support, resources, and technical assistance for seamless token management experiences.",
    },
    {
      title: "Inventory Builder",
      description:
        "Inventory Builder is an SDK tailored for web3 games, facilitating efficient in-game inventory management. Integrated seamlessly with DEST Protocol, it empowers developers to create dynamic and nested inventories. This integration enhances player experiences, offering immersive and customizable gameplay within the web3 gaming ecosystem.",
    },
    {
      title: "Analytics & Statistics",
      description:
        "For game developers integrating DEST into their games, the platform offers robust analytics and trading data tailored to their needs. Developers can access detailed analytics on token usage within their games, including metrics on player interactions, token transactions, and in-game economies. This data allows developers to optimize game mechanics, balance in-game economies, and enhance player experiences based on real-time insights.",
    },
  ];

  return (
    <>
      <Anchor name="services" />
      <div className="accordion-section mb-32 md:mb-44 xl:mb-64">
        <div className="title mb-16">
          <h2
            className="mb-6 text-start font-clashDisplay text-3xl font-semibold md:text-7xl"
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
            Empowering Your Journey: Explore DEST Services
          </p>
        </div>

        <div className="wrapper flex flex-wrap justify-center gap-9 lg:flex-row-reverse lg:flex-nowrap lg:justify-end lg:gap-16 xl:gap-28">
          <div className="mx-0 my-auto flex h-60 w-60 shrink-0 rounded-full object-contain md:h-[440px] md:w-[440px] lg:h-[300px] lg:w-[300px] xl:h-[440px] xl:w-[440px]">
            <Emoji type="sparkles-cat" className="h-full w-full" />
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
