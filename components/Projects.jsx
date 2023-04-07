import React, { useEffect } from "react";
import StoreImg from "@styles/img/kokomi.jpg";
import LandingImg from "@styles/img/yelan.jpg";
import KalikasanImg from "@styles/img/aaka.jpg";
import SchoolImg from "@styles/img/ningguang.jpg";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import Link from "next/link";
import { useWindowDimensions } from "@utils/hooks";

const projectCollection = [
  {
    id: 0,
    name: "Store App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus quis enim venenatis maximus nec eget tortor. Sed sed dui sit amet risus semper luctus. Aliquam dictum elementum imperdiet. Fusce vel metus ut leo commodo pulvinar nec ut leo. Nullam iaculis, arcu ut bibendum fringilla, libero metus molestie lectus, ac malesuada mauris turpis vel eros. Quisque interdum enim risus. Mauris dignissim vel ipsum vitae hendrerit. Aliquam nec vulputate magna. Praesent ullamcorper tempus dolor suscipit pretium. Etiam hendrerit lacinia ex, id euismod dolor congue at. Etiam accumsan elit et justo semper, sed semper tortor rhoncus. Nam sagittis sodales risus sit. ",
    img: StoreImg,
  },
  {
    id: 1,
    name: "Landing page",
    desc: "Lorem ipsum dolors sit amet, consectetur adipiscing elit. Sed at risus quis enim venenatis maximus nec eget tortor. Sed sed dui sit amet risus semper luctus. Aliquam dictum elementum imperdiet. Fusce vel metus ut leo commodo pulvinar nec ut leo. Nullam iaculis, arcu ut bibendum fringilla, libero metus molestie lectus, ac malesuada mauris turpis vel eros. Quisque interdum enim risus. Mauris dignissim vel ipsum vitae hendrerit. Aliquam nec vulputate magna. Praesent ullamcorper tempus dolor suscipit pretium. Etiam hendrerit lacinia ex, id euismod dolor congue at. Etiam accumsan elit et justo semper, sed semper tortor rhoncus. Nam sagittis sodales risus sit. ",
    img: LandingImg,
  },
  {
    id: 2,
    name: "Kalikasan",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus quis enim venenatis maximus nec eget tortor. Sed sed dui sit amet risus semper luctus. Aliquam dictum elementum imperdiet. Fusce vel metus ut leo commodo pulvinar nec ut leo. Nullam iaculis, arcu ut bibendum fringilla, libero metus molestie lectus, ac malesuada mauris turpis vel eros. Quisque interdum enim risus. Mauris dignissim vel ipsum vitae hendrerit. Aliquam nec vulputate magna. Praesent ullamcorper tempus dolor suscipit pretium. Etiam hendrerit lacinia ex, id euismod dolor congue at. Etiam accumsan elit et justo semper, sed semper tortor rhoncus. Nam sagittis sodales risus sit. ",
    img: KalikasanImg,
  },
  {
    id: 3,
    name: "Online School Tools",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus quis enim venenatis maximus nec eget tortor. Sed sed dui sit amet risus semper luctus. Aliquam dictum elementum imperdiet. Fusce vel metus ut leo commodo pulvinar nec ut leo. Nullam iaculis, arcu ut bibendum fringilla, libero metus molestie lectus, ac malesuada mauris turpis vel eros. Quisque interdum enim risus. Mauris dignissim vel ipsum vitae hendrerit. Aliquam nec vulputate magna. Praesent ullamcorper tempus dolor suscipit pretium. Etiam hendrerit lacinia ex, id euismod dolor congue at. Etiam accumsan elit et justo semper, sed semper tortor rhoncus. Nam sagittis sodales risus sit. ",
    img: SchoolImg,
  },
];

const cardItemHoverVariant = {
  rest: {
    y: "16.5rem",
  },
  hover: {
    y: 0,
  },
};

const cardItemHeaderVariant = {
  rest: {
    color: "#ffffff",
  },
  hover: {
    color: "#3aff8f",
  },
};

const cardItemLinkVariant = {
  rest: {
    width: 0,
  },
  hover: {
    width: "100%",
  },
};

function Projects() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    once: false,
    amount: 0.25,
  });

  const { width } = useWindowDimensions();

  useEffect(() => {
    console.log("is in view effect");
    if (isInView) {
      animate(".project-item", { opacity: 1, y: 0 }, { delay: stagger(0.15) });
    } else {
      animate(".project-item", { opacity: 0, y: 50 });
    }
  }, [isInView]);

  return (
    <div className="project-cont">
      {/* Project Header */}
      <h1 className="section-header project-header">PROJECTS</h1>

      {/* Project Item Container */}
      <div className="project-items-cont" ref={scope}>
        {projectCollection.map((proj, indx) => (
          <motion.div
            className="project-item"
            key={indx}
            initial="rest"
            whileHover="hover"
          >
            <img className="project-img" src={proj.img.src} />
            <motion.div
              className="proj-details"
              variants={width > 768 ? cardItemHoverVariant : undefined}
              transition={{ type: "tween", ease: "easeInOut", delay: 0.05 }}
            >
              <motion.h3
                className="item-title"
                variants={cardItemHeaderVariant}
              >
                {proj.name}
              </motion.h3>
              <hr />
              <p className="item-desc">{proj.desc}</p>
              <Link className="redirect-link" href="">
                <motion.div
                  className="redirect-link-cont"
                  initial="rest"
                  whileHover="hover"
                >
                  Learn More
                  <motion.span
                    className="underline"
                    variants={cardItemLinkVariant}
                  ></motion.span>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
