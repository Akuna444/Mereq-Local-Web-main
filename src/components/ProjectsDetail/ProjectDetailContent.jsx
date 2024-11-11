import Image from "next/image";

const ProjectDetailContent = () => {
  return (
    <div className="section-padding">
      <div className="w-full grid gap-10 grid-cols-1 md:grid-cols-3 section-padding-top">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex items-center justify-center rounded-[20px] h-[350px] bg-white">
            <Image
              width={400}
              height={350}
              className="h-[200px] w-[200px]"
              src="/assets/projects/SVG/kacha-logo.svg"
              alt="kacha-SVG"
            />
          </div>{" "}
          <h3 className="px-4 text-tertiary center-text">Lorem Ipsum</h3>
        </div>
        <div className="w-full flex md:col-span-2 flex-col gap-4">
          <div className="w-full h-[350px] ">
            <Image
              width={500}
              height={400}
              className="w-full h-full object-cover"
              src="/assets/projects/1x/kacha-img-1.png"
              alt="kacha-banner-1"
            />
          </div>
          <p className="text-[20px] center-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quia sed officia eligendi natus quidem ad non voluptatibus. Tenetur
            veniam dolorem nihil natus reiciendis molestias necessitatibus
            itaque quidem cum quas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailContent;
