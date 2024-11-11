import Image from "next/image";

const ProjectGrid = () => {
  return (
    <div className="section-padding">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:grid-rows-3 w-full h-[200vh] md:h-[100vh]">
        <div className="md:col-span-3 w-full">
          <Image
            className="w-full h-full rounded-[20px] object-cover"
            src="/assets/projects/1x/kacha-banner-1.png"
            alt="kacha-banner-1"
            width={400}
            height={300}
          />
        </div>
        <div className="md:row-span-2 md:col-span-2 w-full">
          <Image
            className="w-full h-full rounded-[20px] object-cover"
            src="/assets/projects/1x/kacha-mockup-5.png"
            alt="kacha-banner-1"
            width={400}
            height={300}
          />
        </div>
        <div className="md:row-span-2 md:col-span-2  w-full">
          <Image
            className="w-full h-full rounded-[20px] object-cover"
            src="/assets/projects/1x/kacha-mockup-1.png"
            alt="kacha-banner-1"
            width={400}
            height={300}
          />
        </div>
        <div className="md:row-span-2  w-full">
          <Image
            className="w-full h-full rounded-[20px] object-cover"
            src="/assets/projects/1x/kacha-mockup-2.png"
            alt="kacha-banner-1"
            width={400}
            height={300}
          />
        </div>
        <div className="md:col-span-2  w-full">
          <Image
            className="w-full h-full rounded-[20px] object-cover"
            src="/assets/projects/1x/kacha-mockup-3.png"
            alt="kacha-banner-1"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
