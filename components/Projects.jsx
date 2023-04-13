import { useEffect, useRef, useState } from "react";
import { projectCollection } from "@utils/content";
import {
  useHeaderInView,
  useProjectInView,
  useWindowDimensions,
} from "@utils/hooks";
import { motion } from "framer-motion";
import {
  cardItemHoverVariant,
  cardItemHeaderVariant,
  cardItemLinkVariant,
} from "@utils/animationVariants";
import CloseSvg from "@svg/CloseSvg";

function Projects() {
  const [scope] = useProjectInView();
  const [scopeOutline] = useHeaderInView();
  const { width } = useWindowDimensions();

  const [toggleModal, setToggleModal] = useState(null);

  useEffect(() => {
    if (toggleModal) {
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
  }, [toggleModal]);

  return (
    <>
      <div className="project-cont" ref={scopeOutline}>
        {/* Project Header */}
        <div className="outline-cont">
          <motion.h1 className="section-header project-header">
            PROJECTS
          </motion.h1>
          <motion.h1 className="section-header project-outline-header">
            PROJECTS
          </motion.h1>
          <motion.h1 className="section-header project-outline-header-1">
            PROJECTS
          </motion.h1>
        </div>

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
                  <div className="redirect-link">
                    <motion.div
                      className="redirect-link-cont"
                      initial="rest"
                      whileHover="hover"
                      onClick={() =>
                        setToggleModal((state) => {
                          if (!state) {
                            return proj;
                          }
                          return null;
                        })
                      }
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

      {toggleModal && (
        <div className="project-detail-modal">
          <div className="modal-bkg"></div>
          <div className="modal-cont">
            <div className="project-preview">
              <button
                className="close-modal"
                onClick={() => setToggleModal(null)}
              >
                <CloseSvg />
              </button>
            </div>
            <div className="project-info"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
