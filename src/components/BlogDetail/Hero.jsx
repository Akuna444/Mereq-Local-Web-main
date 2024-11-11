import Image from "next/image";

const Hero = ({ title, content, author, date, featuredImage }) => {
  var date = new Date(date);

  // Format the date and time
  var formattedTime = date.toLocaleString();

  return (
    <div className=" relative flex  bg-black w-full p-3 h-[60vh] md:h-[80vh]">
      <Image
        src={`http://209.250.233.239${featuredImage.url}`}
        className="w-full h-full rounded-[20px] opacity-60  object-cover"
        alt={featuredImage?.name}
        width={800}
        height={1000}
      />
      <div className="flex   justify-between  px-10 w-full absolute bottom-6">
        <div className="w-full md:w-[40%] ">
          <h3 className="md:text-[20px] text-[12px] font-bold">{title}</h3>
          <div className="flex py-4 gap-4">
            <button className="w-3 h-3 bg-white rounded-full"></button>
            <button className="w-3 h-3 bg-white/50 rounded-full"></button>
            <button className="w-3 h-3 bg-white/50 rounded-full"></button>
          </div>
        </div>
        <div className="grid w-72 items-center  gap-5  grid-cols-2">
          <div className="w-full h-full flex flex-col justify-center items-end">
            <h4 className="font-bold md:text-[20px] text-[12px]">{author}</h4>
            <p className="md:text-[20px] text-[12px]  text-right font-light">
              {formattedTime}
            </p>
          </div>
          <div className="md:w-24 w-16 h-16 md:h-24 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
