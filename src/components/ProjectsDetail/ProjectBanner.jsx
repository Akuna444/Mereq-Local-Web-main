import Image from "next/image";

const ProjectBanner = () => {
  return (
    <div className="section-padding">
      <div className="w-full  relative h-[400px] ">
        <Image
          width={1200}
          className="w-full object-cover rounded-[40px]  h-full"
          height={400}
          src="/assets/projects/1x/kacha-bg.png"
          alt="kacha-bg"
        />
        <Image
          className="absolute bottom-0"
          width={400}
          height={800}
          src="/assets/projects/1x/kacha-girl.png"
          alt="kacha-girl"
        />
        <Image
          className="absolute bottom-5 right-5"
          width={600}
          height={200}
          src="/assets/projects/SVG/kacha-text-lg.svg"
          alt="kacha-girl"
        />
      </div>
    </div>
  );
};

export default ProjectBanner;
