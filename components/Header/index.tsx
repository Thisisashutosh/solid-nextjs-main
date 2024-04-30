"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import Search from "../Search";
import Location from "../Location";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleLocation = () => {
    setIsVisible(!isVisible);
  };

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-4 ${
        stickyMenu
          ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between gap-5 xl:w-1/4 xl:justify-start">
          <a className="w-1/2 md:w-11/12" href="/">
            <img src="/images/logo/mdw.png" alt="logo" className="" />
          </a>

          <div className="hidden xl:block">
            <svg
              width="30px"
              height="30px"
              viewBox="-2 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleLocation}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.1397 4.05909C20.4929 1.35303 17.2979 0 13.5549 0C9.81179 0 6.61688 1.35303 3.97014 4.05909C1.32338 6.76515 0 10.0317 0 13.8586C0 17.6855 1.32338 20.952 3.97014 23.6582L11.1323 30.9808C12.4615 32.3397 14.6483 32.3397 15.9775 30.9808L23.1397 23.6582C25.7864 20.952 27.1097 17.6855 27.1097 13.8586C27.1097 10.0317 25.7864 6.76515 23.1397 4.05909ZM13.5549 19.0556C13.8886 19.0556 14.2192 19.0223 14.5465 18.9556C14.8739 18.8891 15.1917 18.7906 15.5001 18.66C15.8084 18.5294 16.1014 18.3693 16.3789 18.1798C16.6564 17.9901 16.9131 17.7747 17.1491 17.5334C17.2668 17.4131 17.3785 17.2871 17.4841 17.1556C17.5897 17.024 17.6888 16.8874 17.7813 16.7459C17.8738 16.6044 17.9593 16.4585 18.0378 16.3084C18.1162 16.1583 18.1872 16.0047 18.251 15.8474C18.3147 15.6901 18.3707 15.5301 18.419 15.3672C18.4674 15.2043 18.5078 15.0394 18.5404 14.8725C18.5728 14.7055 18.5972 14.5374 18.6135 14.368C18.6298 14.1986 18.6379 14.0288 18.6379 13.8586C18.6379 13.6884 18.6298 13.5186 18.6135 13.3492C18.5972 13.1798 18.5728 13.0117 18.5404 12.8447C18.5078 12.6778 18.4674 12.5129 18.419 12.35C18.3707 12.1871 18.3147 12.0271 18.251 11.8698C18.1872 11.7125 18.1162 11.5589 18.0378 11.4088C17.9593 11.2587 17.8738 11.1128 17.7813 10.9713C17.6888 10.8298 17.5897 10.6933 17.4841 10.5617C17.3785 10.4301 17.2668 10.3041 17.1491 10.1838C16.9131 9.94249 16.6564 9.72705 16.3789 9.53748C16.1014 9.34789 15.8084 9.18781 15.5001 9.05723C15.1917 8.92664 14.8739 8.82806 14.5465 8.76148C14.2192 8.69491 13.8886 8.66163 13.5549 8.66163C13.2211 8.66163 12.8906 8.69491 12.5632 8.76148C12.2359 8.82806 11.918 8.92664 11.6097 9.05723C11.3013 9.18781 11.0084 9.34789 10.7309 9.53748C10.4534 9.72705 10.1966 9.94249 9.96059 10.1838C9.84288 10.3041 9.73122 10.4301 9.6256 10.5617C9.51999 10.6933 9.42094 10.8298 9.32845 10.9713C9.23596 11.1128 9.15048 11.2587 9.072 11.4088C8.99352 11.5589 8.92243 11.7126 8.85872 11.8698C8.79501 12.0271 8.73899 12.1871 8.69067 12.35C8.64235 12.5129 8.60194 12.6778 8.56946 12.8447C8.53698 13.0117 8.51259 13.1798 8.49628 13.3492C8.47996 13.5186 8.47179 13.6884 8.47179 13.8586C8.47179 14.0288 8.47996 14.1986 8.49628 14.368C8.51259 14.5374 8.53698 14.7055 8.56946 14.8725C8.60194 15.0394 8.64235 15.2043 8.69067 15.3672C8.73899 15.5301 8.79501 15.6902 8.85872 15.8474C8.92243 16.0047 8.99352 16.1583 9.072 16.3084C9.15048 16.4585 9.23596 16.6044 9.32845 16.7459C9.42094 16.8874 9.51999 17.024 9.6256 17.1556C9.73122 17.2871 9.84288 17.4131 9.96059 17.5334C10.1966 17.7747 10.4534 17.9901 10.7309 18.1798C11.0084 18.3693 11.3013 18.5294 11.6097 18.66C11.918 18.7906 12.2359 18.8891 12.5632 18.9556C12.8906 19.0223 13.2211 19.0556 13.5549 19.0556Z"
                  fill="url(#paint0_radial_103_1597)"
                ></path>{" "}
                <defs>
                  {" "}
                  <radialGradient
                    id="paint0_radial_103_1597"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(13.5549) rotate(90) scale(32 27.1097)"
                  >
                    {" "}
                    <stop stop-color="#A2E458"></stop>{" "}
                    <stop offset="1" stop-color="#5AD010"></stop>{" "}
                  </radialGradient>{" "}
                </defs>{" "}
              </g>
            </svg>
          </div>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-end gap-3 xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          {/* <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-primary">
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "text-primary hover:text-primary"
                          : "hover:text-primary"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav> */}
          <Search />
          <div className="mt-7 flex items-center justify-center gap-6 xl:mt-0">
            {/* <ThemeToggler /> */}

            {/* <Link
              href="https://github.com/NextJSTemplates/solid-nextjs"
              className="text-regular font-medium text-waterloo hover:text-primary"
            >
              GitHub Repo 🌟
            </Link> */}

            <button className=" inline-flex items-center justify-center gap-5 rounded-full bg-[#12a701] px-5 py-2 dark:border dark:border-strokedark dark:bg-blacksection">
              <span className="text-base font-medium text-white dark:text-white">
                Order now
              </span>
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 48 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>Whatsapp-color</title>{" "}
                  <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                  <g
                    id="Icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {" "}
                    <g
                      id="Color-"
                      transform="translate(-700.000000, -360.000000)"
                      fill="#ffffff"
                    >
                      {" "}
                      <path
                        d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                        id="Whatsapp"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="absolute left-72 z-99999 hidden xl:block">
          <Location />
        </div>
      )}
    </header>
  );
};

// w-full delay-300

export default Header;
