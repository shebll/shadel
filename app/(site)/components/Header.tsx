"use client"
import Link from "next/link"
import Image from "next/image"
import DropDown from "./dropDown"
import { LazyMotion, domAnimation, m } from "framer-motion"
import Search from "./Search"
function Header() {
  return (
    <LazyMotion features={domAnimation}>
      <nav>
        <div className="fixed shadow-lg top-0 w-full bg-white 0 z-50">
          <m.header
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="container flex justify-between items-center mx-auto gap-20 sm:gap-4 py-4  "
          >
            <Link href="/">
              <Image
                src="/wady_logos.png"
                alt="logo image"
                loading="lazy"
                width={450}
                height={54}
                className="object-contain ml-0  sm:w-[450px]  sm:-ml-40  "
              ></Image>
            </Link>
            <div className="hidden lg:block">
              <Search />
            </div>
            <nav className="hidden lg:inline-flex -mr-40">
              <ul className="flex gap-6 items-center">
                <div className="relative">
                  <li className="font-semibold text-2xl text-black flex items-center group hover:text-red-600">
                    <Link href="/products" className="">
                      Products
                    </Link>{" "}
                    <img src="Rr.png" alt="" className=" w-10 h-10 " />
                    <div className="absolute w-60 top-full left-0 mb-2 bg-white shadow-lg rounded-lg hidden group-hover:block -z-10 group-hover:z-20  transition-opacity duration-300">
                      <ul className=" ">
                        <li className="hover:bg-gray-100 hover:pl-2 duration-300 text-black hover:text-red-600 text-lg">
                          <Link
                            href={"/product?type=hot"}
                            className="block px-4 py-2 "
                          >
                            Central Kitchen
                          </Link>
                        </li>
                        <li className="text-black hover:pl-2 duration-300 hover:bg-gray-100 hover:text-red-600 text-lg">
                          <Link
                            href={"/product?type=kitchen"}
                            className="block px-4 py-2"
                          >
                            Hotel Equipment
                          </Link>
                        </li>
                        <li className="text-black hover:pl-2 duration-300 hover:bg-gray-100 hover:text-red-600 text-lg">
                          <Link
                            href={"/product?type=cold"}
                            className="block px-4 py-2"
                          >
                            Refrigeration
                          </Link>
                        </li>
                        <li className="text-black hover:pl-2 duration-100 hover:bg-gray-100 hover:text-red-600 text-lg">
                          <Link
                            href={"/product?type=laundry"}
                            className="block px-4 py-2"
                          >
                            Laundry
                          </Link>
                        </li>{" "}
                        <li className="text-black hover:pl-2 duration-100 hover:bg-gray-100 hover:text-red-600 text-lg">
                          <Link
                            href={"/product?type=others"}
                            className="block px-4 py-2"
                          >
                            Medical{" "}
                          </Link>
                        </li>
                        <li className="text-black hover:pl-2 duration-100 hover:bg-gray-100 hover:text-red-600 text-lg">
                          <Link
                            href={"/product?type=castle"}
                            className="block px-4 py-2"
                          >
                            Home Appliances{" "}
                          </Link>
                        </li>
                        <li className="text-black hover:pl-2 duration-100  hover:bg-gray-100 hover:text-red-600 text-lg">
                          <Link
                            href={"/product?type=boiler"}
                            className="block px-4 py-2"
                          >
                            Fire Extinguisher
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
                {/* <li className="font-semibold text-2xl hover:text-red-600 text-black ">
                  <Link href="/certifcate">certifcate </Link>
                </li> */}
                <li className="font-semibold text-2xl hover:text-red-600 text-black ">
                  <Link href="/machine">Machines </Link>
                </li>
                <li className="font-semibold text-2xl hover:text-red-600 text-black">
                  <Link href="/projects">Projects</Link>
                </li>
                <li className="font-semibold text-2xl hover:text-red-600 text-black">
                  <Link href="/events">Events</Link>
                </li>
                {/* <li className="font-semibold text-2xl hover:text-red-600 text-black">
                <Link href="/#services">services</Link>
              </li> */}
                <li className="font-semibold text-2xl hover:text-red-600 text-black">
                  <Link href="/#footer">Contact</Link>
                </li>
              </ul>
            </nav>
            <DropDown />
          </m.header>
        </div>
      </nav>
    </LazyMotion>
  )
}

export default Header
