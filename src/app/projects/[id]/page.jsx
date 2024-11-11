import ProjectBanner from "@/components/ProjectsDetail/ProjectBanner";
import ProjectGrid from "@/components/ProjectsDetail/ProjectGrid";
import ProjectDetailText from "@/components/ProjectsDetail/ProjectDetailText";
import ProjectDetailContent from "@/components/ProjectsDetail/ProjectDetailContent";

const ProjectsDetail = () => {
  return (
    <>
      <ProjectBanner />
      <ProjectDetailText />
      <ProjectDetailContent />

      <ProjectGrid />
      <ProjectDetailText />
    </>
  );
};

export default ProjectsDetail;
