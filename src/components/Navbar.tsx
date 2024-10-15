import React from "react";
import MaxWidthWarpper from "./MaxWidthWarpper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import NavLinks from "./Navlinks";

const Navbar = () => {
  return (
    <MaxWidthWarpper className="py-8 flex justify-between">
      <div>
        <h1 className="text-xl font-semibold text-blue-700">Medicare+</h1>
      </div>
      <div className="w-full flex">
        <NavLinks />
        <UnAuthButtons />
      </div>
    </MaxWidthWarpper>
  );
};

export default Navbar;

export const UnAuthButtons = () => {
  return (
    <div className="flex gap-3">
       <Link className={cn(buttonVariants({ variant: "ghost" }))} href={"/join-as-doctor"}>
        Join As Doctor
      </Link>
      <Link className={cn(buttonVariants({ variant: "outline" }),"shadow-none")} href={"/login"}>
        Login
      </Link>
     
      <Link className={cn(buttonVariants({ variant: "default" }))} href={"/register"}>
        Get Started
      </Link>
    </div>
  );
};
