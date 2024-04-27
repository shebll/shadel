"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { LazyMotion, domAnimation, m } from "framer-motion"

function AllMachines() {
  return (
    <h2 id="allmachines">
      <div className="relative">
        <Image
          width={1080}
          height={364}
          src={"/bg/serv.jpg"}
          alt="pg"
          className=" pt-10"
          style={{ width: "100%", height: "100%" }}
        ></Image>
        <div
          className=" left-[40%] sm:bottom-48 bottom-10  "
          style={{
            position: "absolute",
          }}
        >
          {/* sm:p-3 */}
          <Link
            href={"/machine"}
            className=" bg-red-600 w-full sm:px-28 px-3 -ml-[15px] mt-[20px] rounded-2xl   text-white font-bold text-center sm:py-5 py-2 hover:bg-black transition-all p-5 "
          >
            See More
          </Link>
        </div>
      </div>
    </h2>
  )
}

export default AllMachines
