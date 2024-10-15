import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const NavLinks = () => {
    const navLinks = [
      { name: "Doctors", url: "/doctors" },
      { name: "Specialists", url: "/specialists" },
      { name: "Video Consultation", url: "/video-consult" },
      { name: "Clinics", url: "/clinics" },
    ];
    return (
      <>
        <ul className="flex-1 flex items-center justify-center gap-8">
          {navLinks.map((link, index) => {
            return (
              <Link className={cn(buttonVariants({variant:"ghost"}))} href={link.url} key={index}>
                {link.name}
              </Link>
            );
          })}
        </ul>
      </>
    );
  };

  export default NavLinks
  