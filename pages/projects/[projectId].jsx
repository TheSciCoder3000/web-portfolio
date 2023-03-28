import { useRouter } from "next/router";

const ProjectDetails = () => {
  const router = useRouter();
  const projectId = router.query.projectId;
  return <div>Project Details: {projectId}</div>;
};

export default ProjectDetails;
