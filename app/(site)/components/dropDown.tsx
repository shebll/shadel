"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Search from "./Search"
function DropDown() {
  const [state, setState] = useState(false)
  const handleClick = () => {
    setState(!state)
  }
  return (
    <div className="lg:hidden shrink-0">
      <div className="pr-6" onClick={handleClick}>
        <Image
          src={"/menu.png"}
          width={36}
          height={36}
          alt="menu"
          className=" cursor-pointer"
        />
      </div>
      <nav
        className={`${
          state == true ? "block" : "hidden"
        } inline-flex lg:hidden flex-col items-center justify-between absolute top-0 left-0 gap-10 bg-black p-10 w-full z-[5] pt-[60px] `}
      >
        <div onClick={handleClick} className="absolute top-6 right-10 ">
          <Image
            src={"/close2.jpg"}
            width={26}
            height={26}
            alt="menu"
            className=" cursor-pointer"
          />
        </div>
        <Search setState={setState} />
        <ul className="flex items-center flex-col justify-center gap-3 ">
          <li
            onClick={handleClick}
            className="font-semibold text-2xl hover:text-red-600 text-white   "
          >
            <Link href="/products">Products</Link>
          </li>
          <li
            onClick={handleClick}
            className="font-semibold text-2xl hover:text-red-600 text-white "
          >
            <Link href="/machines">Machines</Link>
          </li>

          <li
            onClick={handleClick}
            className="font-semibold text-2xl hover:text-red-600 text-white"
          >
            <Link href="/projects">⁠Services</Link>
          </li>
          <li
            onClick={handleClick}
            className="font-semibold text-2xl hover:text-red-600 text-white"
          >
            <Link href="/events">Events</Link>
          </li>
          <li className="font-semibold text-2xl hover:text-red-600 text-white ">
            <Link href="#Aboutus">About Us</Link>
          </li>
          <li
            onClick={handleClick}
            className="font-semibold text-2xl hover:text-red-600 text-white"
          >
            <Link href="/#footer">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default DropDown
