import Link from "next/link";
import React from "react";
import Menu from "./Menu";

function Header({ home }) {
  return (
    <div className={`w-[100%] ${!home && "bg-black"}`}>
      <div className="flex items-center justify-center h-20 w-[95vw] mx-auto ">
        <div className="flex-[1]">
          <Link href="/" className="text-4xl font-bold text-white">
            John.
          </Link>
        </div>
        <div className="flex-[1] relative">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Header;
