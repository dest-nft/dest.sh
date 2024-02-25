import {
  ContactForm,
  DynamicNftSection,
  Footer,
  Header,
  HowItWorksSection,
  IntroductionSection,
  NestedNftSection,
  ServicesSection,
  ValuesSection,
} from "@/app/_components";

export const metadata = {
  title: "DEST",
};

export default function Index() {
  return (
    <>
      <main className="h-screen w-screen">
        <div className="container mx-auto" />
        <Header />
        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <IntroductionSection />
          <DynamicNftSection />
          <NestedNftSection />
          <HowItWorksSection />
          <ValuesSection />
          <ServicesSection />
          <ContactForm />
        </div>
        <Footer />
      </main>
    </>
  );
}
