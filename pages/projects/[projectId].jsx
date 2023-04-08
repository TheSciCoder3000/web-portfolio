import { useRouter } from "next/router";
import Navbar from "@components/Navbar";
import { navLinks } from "@utils/content";

const ProjectDetails = () => {
  const router = useRouter();
  const projectId = router.query.projectId;

  return (
    <div className="project-details-cont">
      <Navbar navLinks={navLinks} />
    </div>
  );
};

export default ProjectDetails;
