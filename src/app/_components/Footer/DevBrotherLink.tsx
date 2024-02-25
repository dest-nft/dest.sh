import Image from "next/image";

export function DevBrotherLink() {
  return (
    <a
      className="flex w-fit items-center rounded-xl bg-gray px-5 py-[15px] hover:bg-btnBGHeader"
      href="https://devbrother.com/"
      target="_blank"
    >
      <Image
        className="me-4 h-7 w-auto object-contain md:h-10"
        src="/icons/dev-brother.svg"
        width={64}
        height={40}
        alt="logo"
      />
      <div className="flex flex-col">
        <p className="text-xl font-bold md:text-2xl md:leading-7">DevBrother</p>
        <p className="text-xs font-medium">Your Software Engineering Family</p>
      </div>
    </a>
  );
}
