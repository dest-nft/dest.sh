import {
  DynamicNftSection,
  Footer,
  Header,
  HowItWorksSection,
  IntroductionSection,
  NestedNftSection,
} from "@/app/_components";

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
        </div>
        <Footer />
      </main>
    </>
  );
}
