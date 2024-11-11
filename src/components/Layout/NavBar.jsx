"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navBarList } from "@/data/constants";
import { motion, useInView, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import DarkModeToggle from "../UI/DarkModeToggle";
import { Phone, Mail } from "lucide-react";
const NavBar = () => {
  const controls = useAnimation();
  const pathname = usePathname();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

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
    <nav className="bg-transparent md:section-paddingx">
      <div className=" max-w-screen-2xl relative flex  items-center justify-between mx-auto p-4">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <div
          onClick={() => setIsNavbarOpen(false)}
          className={`${
            isNavbarOpen ? " " : "hidden"
          } fixed top-0 left-0 bg-black bg-opacity-35 z-[300] w-[100vw] h-screen  min-h-screen`}
        ></div>
        <aside
          id="default-sidebar"
          className={`fixed top-0 left-0 z-[400] w-64 md:hidden h-screen duration-300 transition-transform ${
            isNavbarOpen ? "" : "-translate-x-full"
          } sm:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-grayDark">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/assets/logo/mereqtech-logo.png"
                className="max-h-8 md:max-h-12"
                alt="Mereq tech logo"
              />
            </Link>
            <ul className="space-y-2 mt-5 font-medium">
              {navBarList.map((nav, i) => {
                return (
                  <li key={i}>
                    <Link
                      onClick={() => setIsNavbarOpen(false)}
                      href={nav.link}
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <span className="ms-3">{nav.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div>
              <a href="tel:+2483882020" className="w-full h-14 gap-5 mt-5 flex">
                <div className="w-fit flex justify-end items-center h-full">
                  <Phone />
                </div>

                <div className="flex flex-col h-ful w-full items-start">
                  <p className=" text-[14px]">Phone number</p>
                  <p className=" text-[14px]">+251938388388</p>
                </div>
              </a>
              <a
                href="mailto:mereqtech@gmail.com"
                className="w-full h-14 gap-5 mt-5 flex"
              >
                <div className="w-fit flex justify-end items-center h-full">
                  <Mail />
                </div>

                <div className="flex flex-col h-ful w-full items-start">
                  <p className=" text-[14px]">Email</p>
                  <p className=" text-[14px]">mereqtech@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </aside>
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/assets/logo/mereqtech-logo.png"
            className="max-h-8 md:max-h-12"
            alt="Mereq tech logo"
          />
        </Link>

        <div
          className={`hidden w-full z-40 md:relative absolute md:top-0 top-16 md:block md:w-auto transition-all duration-300`}
        >
          <ul className="font-medium  text-xl md:bg-transparent bg-grayDark flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0    dark:border-gray-700">
            {navBarList.map((navbar) => {
              const isHomePage = navbar.link === "/";
              const isActive = isHomePage
                ? pathname === navbar.link
                : pathname.includes(navbar.link);

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
                    classNameName={`block py-2 px-3  ${
                      isActive ? "dark:text-white" : "dark:text-gray-400"
                    } text-primary rounded md:bg-transparent  md:p-0 `}
                    aria-current="page"
                  >
                    {navbar.name}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <DarkModeToggle />
      </div>
    </nav>
  );
  // return (
  //   <div>
  //     <nav classNameNameName="bg-transparent text-white block w-full z-100 top-0 start-0  ">
  //       <div classNameNameName="max-w-screen-xl flex bg-transparent items-center justify-between mx-auto p-4">
  //         <Link
  //           href="/"
  //           classNameNameName="flex items-center space-x-3 rtl:space-x-reverse"
  //         >
  //           <img
  //             src="/assets/logo/mereqtech-logo.png"
  //             classNameNameName="max-h-12"
  //             alt="Mereq tech Logo"
  //           />
  //         </Link>

  //         <div
  //           classNameNameName="items-center justify-end md:justify-between  w-full flex md:w-auto md:order-1"
  //           id="navbar-sticky"
  //         >
  //           <ul classNameNameName="md:flex flex-col text-white dark:text-primaryLight gap-7 hidden font-bold p-4 md:p-0 mt-4 text-xl border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
  //             {navBarList.map((navbar) => {
  //               const isHomePage = navbar.link === "/";
  //               const isActive = isHomePage
  //                 ? pathname === navbar.link
  //                 : pathname.includes(navbar.link);

  //               return (
  //                 <motion.li
  //                   key={navbar.id}
  //                   ref={ref}
  //                   variants={{
  //                     hidden: { y: -30, opacity: 0 },
  //                     visible: { y: 0, opacity: 1 },
  //                   }}
  //                   initial="hidden"
  //                   animate={controls}
  //                   transition={{
  //                     duration: 1,
  //                     delay: 0 + (navbar.id - 1) / 10,
  //                   }}
  //                 >
  //                   <Link
  //                     href={navbar.link}
  //                     classNameNameName={`block py-2 px-3  ${
  //                       isActive ? "dark:text-white" : "dark:text-gray-400"
  //                     } text-primary rounded md:bg-transparent  md:p-0 `}
  //                     aria-current="page"
  //                   >
  //                     {navbar.name}
  //                   </Link>
  //                 </motion.li>
  //               );
  //             })}
  //           </ul>
  //           <div classNameNameName="ml-4">
  //             <DarkModeToggle />
  //           </div>
  //           <div classNameNameName=" md:hidden  flex px-6 md:order-2 space-x-3  md:space-x-0 rtl:space-x-reverse">
  //             <button onClick={() => setIsMobile(!isMobile)} classNameName="group">
  //               <div classNameName="w-16 bg-primaryLight dark:bg-white group-hover:rotate-45 transition-all duration-300 h-1 rounded-sm my-3"></div>
  //               <div classNameName="w-16 bg-primaryLight dark:bg-white h-1 group-hover:-rotate-45 group-hover:-translate-y-4 transition-all duration-300 rounded-sm my-3"></div>
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </nav>
  //   </div>
  // );
};

export default NavBar;
