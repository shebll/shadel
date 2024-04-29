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
        <div className="fixed top-0 z-50 w-full bg-white shadow-lg">
          <m.header
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="container flex items-center justify-between py-4 mx-auto"
          >
            <div className="flex ">
              <Link href="/">
                <Image
                  src="/shadel.png"
                  alt="logo image"
                  loading="lazy"
                  width={150}
                  height={54}
                  className="object-contain sm:w-52 w-28 sm:ml-0 ml-5 max-w-[140px] "
                ></Image>
              </Link>
              {/* <Link href="/">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1RZdwU_UFadMTXOCIaiwbdSwLmG2tUkpz"
                  alt="logo image"
                  loading="lazy"
                  width={250}
                  height={54}
                  className="object-contain sm:w-52 w-44 sm:ml-0 ml-5 s"
                ></Image>
              </Link> */}
            </div>
            <div className="hidden lg:block">
              <Search />
            </div>
            <nav className="hidden lg:inline-flex">
              <ul className="flex items-center gap-4">
                <div className="relative">
                  <li className="flex items-center text-lg font-semibold text-black group hover:text-red-600">
                    <Link href="/products" className="">
                      Products
                    </Link>{" "}
                    <Image
                      width={40}
                      height={40}
                      src="/Rr.png"
                      alt="drop down menu"
                      className="cursor-pointer "
                    />
                    <div className="absolute left-0 hidden mb-2 transition-opacity duration-300 bg-white rounded-lg shadow-lg w-60 top-full group-hover:block -z-10 group-hover:z-20">
                      <ul className="">
                        <li className="text-sm text-black duration-300 hover:bg-gray-100 hover:pl-2 hover:text-red-600">
                          <Link
                            href={"/product?type=hot"}
                            className="block px-4 py-2 "
                          >
                            Central Kitchen
                          </Link>
                        </li>
                        <li className="text-sm text-black duration-300 hover:pl-2 hover:bg-gray-100 hover:text-red-600">
                          <Link
                            href={"/product?type=kitchen"}
                            className="block px-4 py-2"
                          >
                            Hotel Equipment
                          </Link>
                        </li>
                        <li className="text-sm text-black duration-300 hover:pl-2 hover:bg-gray-100 hover:text-red-600">
                          <Link
                            href={"/product?type=cold"}
                            className="block px-4 py-2"
                          >
                            Refrigeration
                          </Link>
                        </li>
                        <li className="text-sm text-black duration-100 hover:pl-2 hover:bg-gray-100 hover:text-red-600">
                          <Link
                            href={"/product?type=laundry"}
                            className="block px-4 py-2"
                          >
                            Laundry
                          </Link>
                        </li>{" "}
                        <li className="text-sm text-black duration-100 hover:pl-2 hover:bg-gray-100 hover:text-red-600">
                          <Link
                            href={"/product?type=others"}
                            className="block px-4 py-2"
                          >
                            Medical{" "}
                          </Link>
                        </li>
                        <li className="text-sm text-black duration-100 hover:pl-2 hover:bg-gray-100 hover:text-red-600">
                          <Link
                            href={"/product?type=castle"}
                            className="block px-4 py-2"
                          >
                            Home Appliances{" "}
                          </Link>
                        </li>
                        <li className="text-sm text-black duration-100 hover:pl-2 hover:bg-gray-100 hover:text-red-600">
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
                {/* <li className="text-2xl font-semibold text-black hover:text-red-600 ">
                  <Link href="/certifcate">certifcate </Link>
                </li> */}
                <li className="text-lg font-semibold text-black hover:text-red-600 ">
                  <Link href="/machine">Machines </Link>
                </li>
                <li className="text-lg font-semibold text-black hover:text-red-600 ">
                  <Link href="#Aboutus">About Us</Link>
                </li>

                <li className="text-lg font-semibold text-black hover:text-red-600">
                  <Link href="/projects">⁠Services</Link>
                </li>
                <li className="text-lg font-semibold text-black hover:text-red-600">
                  <Link href="/events">Events</Link>
                </li>
                {/* <li className="text-2xl font-semibold text-black hover:text-red-600">
                <Link href="/#services">services</Link>
              </li> */}
                <li className="text-lg font-semibold text-black hover:text-red-600">
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
