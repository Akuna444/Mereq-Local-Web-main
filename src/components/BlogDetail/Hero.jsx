import Image from "next/image";

const Hero = () => {
  return (
    <div className=" relative bg-black w-full p-3 h-[100vh]">
      <Image
        src="/assets/blog/1x/mereq-bg-1.png"
        className="w-full h-full rounded-[20px] opacity-60  object-cover"
        alt="bg"
        width={800}
        height={1000}
      />
      <div className="flex justify-between px-10 w-full absolute bottom-6">
        <div className="w-[40%] ">
          <h3 className="font-bold">Lorem dorem sit ameut</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            amet, nam vero hic voluptatum esse. Impedit incidunt porro fugiat
            iusto.
          </p>
          <div className="flex py-4 gap-4">
            <button className="w-3 h-3 bg-white rounded-full"></button>
            <button className="w-3 h-3 bg-white/50 rounded-full"></button>
            <button className="w-3 h-3 bg-white/50 rounded-full"></button>
          </div>
        </div>
        <div className="grid w-72 items-center  gap-5  grid-cols-2">
          <div className="w-full h-full flex flex-col justify-center items-end">
            <h4 className="font-bold">Dolor sit</h4>
            <p className="text-[20px] font-light">12-12-2022</p>
          </div>
          <div className="w-24 h-24 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
