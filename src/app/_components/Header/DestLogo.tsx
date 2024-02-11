import Image from "next/image";
import logo from "../../../../public/icons/dest.svg";
import React from "react";

export function DestLogo() {
  return (
    <div className="flex object-contain">
      <Image
        src={logo}
        className="logo h-5 w-auto lg:h-8"
        width={"149"}
        height={"32"}
        alt="logo"
      />
    </div>
  );
}
