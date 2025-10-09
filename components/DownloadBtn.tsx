"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Route } from "next";

interface DownloadBtnProps {
  className?: string;
}

const DownloadBtn: React.FC<DownloadBtnProps> = () => {
  const handleClick = () => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "button_click", {
        button_id: "download_resume",
        button_text: "Download Resume",
        page_location: window.location.href,
      });
    }
  };

  return (
    <Button variant="dark" size="lg" asChild className="cursor-pointer">
      <Link
        href={"/RESUME - JOHN JUVI QUIMADA DE VILLA.pdf" as Route}
        download="RESUME - JOHN JUVI DE VILLA"
        target="_blank"
        onClick={handleClick}
      >
        Download Resume
      </Link>
    </Button>
  );
};

export default DownloadBtn;
