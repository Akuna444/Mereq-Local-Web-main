import Image from "next/image";

const OurServices = () => {
  return (
    <div className="section-padding h-[490vh] relative">
      <h1 className="text-secondary text-center">Our Services</h1>
      <Image
        width={400}
        height={400}
        className="top-0 absolute left-[24%]"
        src="/assets/services/SVG/top-to-branding.svg"
        alt="alt"
      />
      <div className="top-[9%] flex gap-10 w-[70%] h-[300px] absolute left-[3%]">
        <Image
          width={300}
          height={300}
          src="/assets/services/SVG/branding.svg"
          alt="alt"
        />
        <div className="flex w-full h-full flex-col justify-center gap-3">
          <h2 className="text-tertiary">Branding</h2>
          <p className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            consequuntur atque odio eligendi delectus quasi fugit id dolor
            molestias ipsa.
          </p>
        </div>
      </div>
      <Image
        width={300}
        height={300}
        className="top-[17%] absolute left-[25%]"
        src="/assets/services/SVG/branding-to-graphics.svg"
        alt="alt"
      />{" "}
      <div className="top-[20%] flex  h-[400px] w-fit absolute left-[41%]">
        <Image
          width={400}
          height={400}
          src="/assets/services/SVG/graphics.svg"
          alt="alt"
        />
        <div className="flex w-full h-full flex-col justify-center gap-3">
          <h2 className="text-tertiary">Creative & Graphics Design</h2>
          <p className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            consequuntur atque odio eligendi delectus quasi fugit id dolor
            molestias ipsa.
          </p>
        </div>
      </div>
      <Image
        width={200}
        height={200}
        className="top-[25%] absolute left-[31%]"
        src="/assets/services/SVG/graphics-to-digital.svg"
        alt="alt"
      />
      <div className="top-[36%] flex w-[70%] h-[350px] absolute left-[8%]">
        <Image
          width={350}
          height={350}
          src="/assets/services/SVG/digital.svg"
          alt="alt"
        />
        <div className="flex w-full h-full flex-col justify-center gap-3">
          <h2 className="text-tertiary">Digital Marketing</h2>
          <p className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            consequuntur atque odio eligendi delectus quasi fugit id dolor
            molestias ipsa.
          </p>
        </div>
      </div>
      <Image
        width={600}
        height={600}
        className="top-[41%] absolute left-[31%]"
        src="/assets/services/SVG/digital-to-media.svg"
        alt="alt"
      />
      <div className="top-[51%] flex h-[350px] w-[60%] absolute left-[36%]">
        <div className="flex w-full h-full flex-col justify-center gap-3">
          <h2 className="text-tertiary">Media Production</h2>
          <p className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            consequuntur atque odio eligendi delectus quasi fugit id dolor
            molestias ipsa.
          </p>
        </div>
        <Image
          width={350}
          height={350}
          src="/assets/services/SVG/media.svg"
          alt="alt"
        />
      </div>
      <Image
        width={600}
        height={600}
        className="top-[55%] absolute left-[31%]"
        src="/assets/services/SVG/media-to-tech.svg"
        alt="alt"
      />
      <div className="top-[65%] flex w-[70%] h-[350px] gap-10 absolute left-[10%]">
        <Image
          width={350}
          height={350}
          src="/assets/services/SVG/tech.svg"
          alt="alt"
        />
        <div className="flex w-full h-full flex-col justify-center gap-3">
          <h2 className="text-tertiary">Tech Solution</h2>
          <p className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            consequuntur atque odio eligendi delectus quasi fugit id dolor
            molestias ipsa.
          </p>
        </div>
      </div>
      <Image
        width={600}
        height={600}
        className="top-[74%] absolute left-[33%]"
        src="/assets/services/SVG/tech-to-info.svg"
        alt="alt"
      />
      <div className="top-[84%] flex h-[350px] w-[60%] absolute left-[37%]">
        <div className="flex w-full h-full flex-col justify-center gap-3">
          <h2 className="text-tertiary">Infographics /Animation</h2>
          <p className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            consequuntur atque odio eligendi delectus quasi fugit id dolor
            molestias ipsa.
          </p>
        </div>
        <Image
          width={350}
          height={350}
          src="/assets/services/SVG/info.svg"
          alt="alt"
        />
      </div>
    </div>
  );
};

export default OurServices;
