import Image from "next/image";
import { PlayIcon } from "lucide-react";

const WhoWeAre = () => {
  return (
    <div className="section-padding">
      <div className="grid grid-cols-2 gap-12">
        <div className="flex relative justify-end">
          <div className="absolute h-full w-full  top-[10%] -left-48">
            <Image
              className="w-full h-[80%]"
              src="/assets/about-page/yellow-texture.svg"
              alt="yellow-texture"
              width={600}
              height={600}
            />
          </div>
          <div className="h-full w-[60%] relative rounded-[20px] border-secondary border-2 bg-slate-400 ">
            <button className="absolute -bottom-10 blur-2xl left-[40%] p-8 bg-secondary z-[-1] rounded-full">
              <PlayIcon />
            </button>
            <button className="absolute -bottom-10 left-[40%] p-8 bg-secondary rounded-full">
              <PlayIcon />
            </button>
          </div>
        </div>
        <div className="flex flex-col py-20 gap-4">
          <Image
            src="/assets/about-page/bulb-brain.svg"
            alt="bulb-brain"
            height={70}
            width={70}
          />
          <h1 className="dark:text-secondary py-3">Who We are</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum et
            atque maxime tenetur, explicabo dolores odit magni nesciunt dolor
            cupiditate laboriosam quod enim quo eveniet non quos perspiciatis
            adipisci, quaerat incidunt minima optio quis facere. Repellendus,
            accusamus soluta quam consequuntur corporis corrupti nostrum animi
            aut laboriosam molestiae debitis inventore vel officiis quia
            deserunt aliquid sed consectetur vitae tempore hic ab?
          </p>
          <button className="bg-secondary rounded-[10px] w-fit text-white px-6 py-2">
            <h4>Lorem Ipsum</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
