import Link from "next/link";
import React from "react";

type TSocialLinks = {
  children: React.ReactNode;
  link: string;
  tooltip: string;
};
export default function SocialLinks({ children, link, tooltip }: TSocialLinks) {
  return (
    <Link href={link} data-tip={tooltip} className="tooltip cursor-pointer hover:scale-[1.1] text-slate-500 hover:text-purple-400 transition-all">
      {children}
    </Link>
  );
}
