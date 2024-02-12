import { Anchor } from "@/shared/components/Anchor";
import { Emoji } from "@/shared/components/Emoji";
import { Form } from "@/app/_components/ContactForm/Form";

export function ContactForm() {
  return (
    <section className="relative mb-24 overflow-hidden rounded-xl bg-gray px-4 py-14 md:px-7 md:py-24 lg:px-24">
      <Anchor name="contact" />
      <div className="flex flex-wrap justify-between gap-8 md:flex-nowrap md:gap-0">
        <div className="max-w-xs sm:max-w-none md:max-w-[445px]">
          <h2 className="font-ClashDisplay relative mb-6 max-w-[245px] text-start text-3xl font-semibold sm:max-w-none md:text-7xl">
            Let’s build something great together
            <Emoji
              className="absolute right-[-10px] top-[-20px] sm:right-0 sm:top-[40px] md:right-[70px] md:top-[290px]"
              type="tongue-cat"
            />
          </h2>
          <p className="text-start text-base font-normal opacity-60 md:text-xl">
            We will contact you in 24 hours
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
}
