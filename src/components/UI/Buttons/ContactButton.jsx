import Link from "next/link";

const ContactButton = () => {
  return (
    <Link href="/contact" className="relative">
      <button className="bg-[#1b0048] font-bold  border shadow-glow2 group rounded-xl h-fit md:mx-0 mx-auto items-center gap-8 flex text-xl md:text-2xl border-white/70  w-fit px-[8px] py-[4px] md:px-2 md:py-2 text-tertiary">
        Get in touch{" "}
      </button>
    </Link>
  );
};

export default ContactButton;
