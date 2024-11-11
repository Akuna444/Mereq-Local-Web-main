"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { navBarList } from "@/data/constants";
import { motion, useInView, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const controls = useAnimation();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div>
      <nav className="bg-transparent text-white block w-full z-100 top-0 start-0  ">
        <div className="max-w-screen-xl flex bg-transparent items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/assets/logo/mereqtech-logo.png"
              className="max-h-12"
              alt="Mereq tech Logo"
            />
          </Link>

          <div
            className="items-center justify-end md:justify-between  w-full flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="md:flex flex-col text-white dark:text-primaryLight gap-14 hidden font-bold p-4 md:p-0 mt-4 text-xl border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {navBarList.map((navbar) => {
                const isActive = pathname.includes(navbar.link);
                return (
                  <motion.li
                    key={navbar.id}
                    ref={ref}
                    variants={{
                      hidden: { y: -30, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{
                      duration: 1,
                      delay: 0 + (navbar.id - 1) / 10,
                    }}
                  >
                    <Link
                      href={navbar.link}
                      className={`block py-2 px-3 ${
                        isActive
                          ? "dark:text-white"
                          : isHomePage
                          ? "dark:text-white"
                          : "dark:text-gray-400"
                      } text-primary rounded md:bg-transparent  md:p-0 `}
                      aria-current="page"
                    >
                      {navbar.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <div className=" md:hidden ml-14 flex px-6 md:order-2 space-x-3  md:space-x-0 rtl:space-x-reverse">
              <button className="group">
                <div className="w-16 bg-primaryLight dark:bg-white group-hover:rotate-45 transition-all duration-300 h-1 rounded-sm my-3"></div>
                <div className="w-16 bg-primaryLight dark:bg-white h-1 group-hover:-rotate-45 group-hover:-translate-y-4 transition-all duration-300 rounded-sm my-3"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
