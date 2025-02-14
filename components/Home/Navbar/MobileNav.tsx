import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  return (
    <div>
      {/* Overlay with opacity transition */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black z-[10000] 
          transition-opacity duration-500 ${
            showNav
              ? "opacity-70 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Navigation Menu */}
      <div
        className={`fixed right-0 top-0 h-screen w-[80%] sm:w-[60%] bg-indigo-900
          flex flex-col justify-center space-y-6 transform transition-transform
          duration-500 z-[100006] ${
            showNav ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} className="ml-12">
            <p className="nav__link text-[20px] border-b-[1.5px] pb-2 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}

        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-6 sm:top-5 sm:right-8 
            w-6 h-6 sm:w-8 sm:h-8 text-white cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
