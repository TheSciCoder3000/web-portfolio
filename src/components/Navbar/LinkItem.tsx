"use client";

import React, { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";
import { Route } from "next";
import { usePathname } from "next/navigation";

interface LinkItemProps {
  className?: string;
  href: Route;
  children: ReactNode;
}

const LinkItem: React.FC<LinkItemProps> = ({ className, href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        pathname === href
          ? "pointer-events-none cursor-default font-semibold text-white"
          : "text-gray-400 transition-colors duration-200 hover:text-gray-300",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default LinkItem;
