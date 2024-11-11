const Tags = ({ tags }) => {
  console.log("ta", tags);
  return (
    <div className="w-fit flex flex-col gap-5 section-padding ">
      <h4 className="text-tertiary">Tags</h4>
      <div className=" flex flex-wrap gap-5">
        <div className="bg-white/50 w-32 md:w-64 p-2 py-1 md:py-3 rounded-[20px]">
          <h6>{tags} </h6>
        </div>
      </div>
    </div>
  );
};

export default Tags;
