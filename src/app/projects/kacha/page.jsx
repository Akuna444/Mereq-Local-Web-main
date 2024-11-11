import Image from "next/image";
const ProjectsDetail = () => {
  return (
    <>
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
      <div className="section-padding">
        <h2 className="text-tertiary mb-5 center-text">
          Branding/Photography /Web Design
        </h2>
        <p className="text-[23px] center-text">
          Kacha is a mobile money platform offering secure, convenient, and
          affordable digital financial services. Kacha’s goal is to promote
          sustainable growth, increase financial inclusion, and improve quality
          of life.
        </p>
      </div>
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
            <h3 className="px-4 text-tertiary center-text">
              Concept of the Creation
            </h3>
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
              As Kacha&apos;s focus is on mobile money transfers, it inspired
              our team to craft a unique logo. We integrated the letter
              &quot;K&quot; to represent Kacha, while also incorporating a
              universally recognized hand sign for money, creating a distinctive
              and modern design.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:grid-rows-3 w-full h-[200vh] md:h-[100vh]">
          <div className="md:col-span-3 project-detail-container">
            <Image
              className="project-detail-image"
              src="/assets/projects/1x/kacha-banner-1.png"
              alt="kacha-banner-1"
              width={400}
              height={300}
            />
          </div>
          <div className="md:row-span-2 md:col-span-2 project-detail-container">
            <Image
              className="project-detail-image"
              src="/assets/projects/1x/kacha-mockup-5.png"
              alt="kacha-banner-1"
              width={400}
              height={300}
            />
          </div>
          <div className="md:row-span-2 md:col-span-2  project-detail-container">
            <Image
              className="project-detail-image"
              src="/assets/projects/1x/kacha-mockup-1.png"
              alt="kacha-banner-1"
              width={400}
              height={300}
            />
          </div>
          <div className="md:row-span-2 project-detail-container">
            <Image
              className="project-detail-image"
              src="/assets/projects/1x/kacha-mockup-2.png"
              alt="kacha-banner-1"
              width={400}
              height={300}
            />
          </div>
          <div className="md:col-span-2  project-detail-container">
            <Image
              className="project-detail-image"
              src="/assets/projects/1x/kacha-mockup-3.png"
              alt="kacha-banner-1"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="section-padding">
        <h2 className="text-tertiary mb-5 center-text">
          Mobile UI and Web Design
        </h2>
        <p className="text-[23px] center-text">
          Kacha required clear and easy-to-use designs for their websites and
          mobile apps, aligning with their brand. Therefore, we created modern
          and sleek designs that adhere to global standards.
        </p>
      </div>
    </>
  );
};

export default ProjectsDetail;
