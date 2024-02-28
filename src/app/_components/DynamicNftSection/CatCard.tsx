import mainCat from "@/../public/icons/cat-main.webp";
import Image from "next/image";

export function CatCard() {
  return <Image src={mainCat} width={"263"} height={"314"} alt="logo" />;
}
