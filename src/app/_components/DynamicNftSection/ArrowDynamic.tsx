import Image from "next/image";
import arrowDynamic from "@/../public/icons/arrow-dinamic.svg";

export function ArrowDynamic() {
  return (
    <Image
      src={arrowDynamic}
      className="logo h-full w-auto"
      width={"72"}
      height={"72"}
      alt="logo"
    />
  );
}
