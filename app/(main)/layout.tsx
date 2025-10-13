import Footer from "@/components/Footer";
import React from "react";

function layout({ children }: LayoutProps<"/">) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default layout;
