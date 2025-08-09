import React from "react";
import { motion } from "motion/react";
import { useTiltCard } from "./hooks/useTIltCard";
import aboutStyles from "@/app/styles/about.module.scss";
import Image from "next/image";

const TiltCard = () => {
  const [ref, transform, handleMouseMove, handleMouseLeave] = useTiltCard();

  return (
    <motion.div
      className={aboutStyles.aboutBox}
      ref={ref}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        height={0}
        width={0}
        sizes="100vw"
        alt="grad-pic"
        className={aboutStyles.aboutImg}
        src="/grad.webp"
      />
    </motion.div>
  );
};

export default TiltCard;
