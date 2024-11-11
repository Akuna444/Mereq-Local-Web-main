import { ChevronRight } from "lucide-react";

const ContactButton = () => {
  return (
    <div className="relative">
      <button className="bg-primary font-bold  border shadow-2xl shadow-primaryLight group rounded-xl h-fit md:mx-0 mx-auto items-center gap-8 flex text-xl md:text-2xl border-white/70  w-fit px-[8px] py-[4px] md:px-2 md:py-2 text-tertiary">
        Get in touch{" "}
      </button>
    </div>
  );
};

export default ContactButton;
