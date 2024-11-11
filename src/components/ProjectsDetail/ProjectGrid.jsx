import Image from "next/image";

const ProjectGrid = () => {
  return (
    <div className="section-padding">
      <div className="grid grid-cols-5 gap-5 grid-rows-3 w-full h-[100vh]">
        <div className="col-span-3 w-full">
          <Image
            className="w-full h-full rounded-[20px] object-cover"
            src="/assets/projects/1x/kacha-banner-1.png"
            alt="kacha-banner-1"
            width={400}
            height={300}
          />
        </div>
        <div className="row-span-2 col-span-2 w-full">
          <Image
            className="w-full h-full rounded-[20px] object-cover"
            src="/assets/projects/1x/kacha-mockup-5.png"
            alt="kacha-banner-1"
            width={400}
            height={300}
          />
        </div>
        <div className="row-span-2 col-span-2  w-full">
          <Image
            className="w-full h-full rounded-[20px] object-cover"
            src="/assets/projects/1x/kacha-mockup-1.png"
            alt="kacha-banner-1"
            width={400}
            height={300}
          />
        </div>
        <div className="row-span-2  w-full">
          <Image
            className="w-full h-full rounded-[20px] object-cover"
            src="/assets/projects/1x/kacha-mockup-2.png"
            alt="kacha-banner-1"
            width={400}
            height={300}
          />
        </div>
        <div className="col-span-2  w-full">
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
