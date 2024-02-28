import Image from "next/image";
import rectHero from "@/../public/icons/rectangle-hero.svg";
import ellipseCat from "@/../public/icons/ellipse-content.svg";
import mainCat from "@/../public/icons/cat-main.webp";
import glasses from "@/../public/icons/glasses.webp";
import hat from "@/../public/icons/hat.webp";
import { Emoji } from "@/shared/components/Emoji";

export function CatCard() {
  return (
    <div className="flex object-contain md:h-[400px] md:w-auto">
      <div className="absolute left-[38%] top-[57%] flex h-auto w-[320px] -translate-x-1/2 -translate-y-1/2 object-contain md:h-auto md:w-[400px]">
        <Image src={rectHero} width={"440"} height={"491"} alt="logo" />
      </div>
      <div className="absolute left-[50%] top-[50%] flex h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2 object-contain md:left-[0%] md:h-[1037px] md:w-[1236px]">
        <Image
          src={ellipseCat}
          className="logo h-full w-auto"
          width={"470"}
          height={"271"}
          alt="logo"
        />
      </div>
      <Image
        src={mainCat}
        className="logo relative md:h-full md:w-full lg:h-full lg:w-auto"
        width={"263"}
        height={"314"}
        alt="logo"
      />
      <div className="absolute left-[35px] top-[65px] flex h-[65px] object-contain md:top-[85px] md:h-[90px] md:w-auto">
        <Image
          src={glasses}
          className="logo h-full w-auto"
          width={"148"}
          height={"65"}
          alt="logo"
        />
      </div>
      <div className="absolute left-[95px] top-[-20px] flex h-[72px] object-contain md:left-[120px] md:top-[-35px] md:h-[100px] md:w-auto">
        <Image
          src={hat}
          className="logo h-full w-auto"
          width={"62"}
          height={"72"}
          alt="logo"
        />
      </div>
      <div className="absolute bottom-[-15px] left-[-85px] flex h-[45px] object-contain md:left-[-110px] md:h-[75px] md:w-auto">
        <Emoji type={"green-fire"} />
      </div>
    </div>
  );
}
