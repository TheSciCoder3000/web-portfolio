import { useEffect, useState } from "react";
import { projectCollection } from "@utils/content";
import { useWindowDimensions } from "@utils/hooks";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import Link from "next/link";
import {
  cardItemHoverVariant,
  cardItemHeaderVariant,
  cardItemLinkVariant,
} from "@utils/animationVariants";

function Projects() {
  const [scope, animate] = useAnimate();
  const [toggleMode, setToggleMode] = useState(false);
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

  useEffect(() => {
    if (toggleMode) {
      console.log("modal on");
      // When the modal is shown, we want a fixed body
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
    } else {
      console.log("modal off");
      // When the modal is hidden...
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [toggleMode]);

  return (
    <>
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
              {width && (
                <motion.div
                  className="proj-details"
                  variants={
                    width > 768 ? cardItemHoverVariant : cardItemHeaderVariant
                  }
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
                  <div
                    className="redirect-link"
                    onClick={() => setToggleMode(!toggleMode)}
                  >
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
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="project-detail-modal">
        <div className="modal-bkg"></div>
        <div className="modal-cont">
          <div className="project-preview"></div>
          <div className="project-info"></div>
        </div>
      </div>
    </>
  );
}

export default Projects;
