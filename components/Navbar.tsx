import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import MaxwidthWrapper from "./MaxwidthWrapper";

const Navbar = () => {
  return (
    <MaxwidthWrapper className="flex justify-between py-5">
      <div>
        <Link href={"/"}>
          <h1 className="font-semibold text-xl text-blue-700">Medicare</h1>
        </Link>
      </div>
      <ul className="space-x-5">
        <Link
          className={cn(buttonVariants({ variant: "ghost" }))}
          href={"/nuterician"}
        >Nuterician</Link>
        <Link
          className={cn(buttonVariants({ variant: "ghost" }))}
          href={"/mood-enhancer"}
        >Mood Enhancer</Link>
        <Link
          className={cn(buttonVariants({ variant: "ghost" }))}
          href={"/doctors"}
        >Doctors</Link>
      </ul>
    </MaxwidthWrapper>
  );
};

export default Navbar;
