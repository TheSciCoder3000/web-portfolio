import { useEffect, useRef, useState } from "react";
import { ProjectCollection } from "@utils/content";
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
import GithubSvg from "@svg/GithubSvg";
import ServerSvg from "@svg/ServerSvg";
import BookSvg from "@svg/BookSvg";
import Link from "next/link";

function Projects() {
  const [scope] = useProjectInView();
  const [scopeOutline] = useHeaderInView();
  const { width } = useWindowDimensions();

  const [toggleModal, setToggleModal] = useState(null);

  useEffect(() => {
    console.log(toggleModal ? "Toggle mode is on" : "Toggle mode is off");
    if (toggleModal) {
      // When the modal is shown, we want a fixed body
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
    }

    // Turn off modal if webpage is redirected
    return () => {
      if (toggleModal) {
        const scrollY = document.body.style.top;
        console.log(`scroll to ${scrollY}`);
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    };
  }, [toggleModal]);

  return (
    <>
      <div id="projects" className="project-cont" ref={scopeOutline}>
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
          {ProjectCollection.map((proj, indx) => (
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
              <img className="modal-cover" src={toggleModal.full ? toggleModal.full.src : null} alt="" />
              <button
                className="close-modal"
                onClick={() => setToggleModal(null)}
              >
                <CloseSvg />
              </button>
            </div>
            <div className="project-info">
              <h2 className="project-title">{toggleModal.name}</h2>
              <div className="project-tags">
                {toggleModal.tags.map((tag) => (
                  <div className="project-tag-item">{tag}</div>
                ))}
              </div>
              <div className="project-description">
                <p className="project-summary-content">{toggleModal.summary}</p>
                <div className="links-cont">
                  <a
                    target="_blank"
                    href={toggleModal.live}
                    rel="noopener noreferrer"
                    className="link-btn live-btn"
                  >
                    <ServerSvg className="link-icon server-icon" />
                    Live Website
                  </a>
                  <a
                    target="_blank"
                    href={toggleModal.github}
                    rel="noopener noreferrer"
                    className="link-btn github-btn"
                  >
                    <GithubSvg className="link-icon github-icon" />
                    Github Repo
                  </a>
                  {/* <Link
                    href={`/projects/${toggleModal.id}`}
                    className="link-btn book-btn"
                  >
                    <BookSvg className="link-icon book-icon" />
                    Project Review
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
