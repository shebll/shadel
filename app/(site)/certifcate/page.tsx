"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import React, { useRef, useState } from "react"

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const images = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 50,
    },
  },
}

export default function Certificate() {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const images = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 50,
      },
    },
  }

  return (
    <h1 className="">
      <h2 className="section-heading text-gray-300 sm:text-white z-20 pt-28 pt-26 sm:pt-36 absolute text-center justify-center ml-[30%] sm:ml-[40%] ">
        Certificate
      </h2>

      <img
        src="/bg/10.png"
        alt="bg"
        style={{
          height: "50vh",
          objectFit: "cover",
          width: "100%",
          position: "absolute",
          zIndex: "-1",
          top: "3%",
          opacity: "1",
          right: "0",
        }}
      />

      <div className="  w-full h-full pt-[20%]">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 px-10 lg:px-5 sm:px-28 ">
          <div>
            <div className="flex items-center ">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Certificate name
              </h2>
            </div>
            <p className="mt-4 text-black">
              Embark on a journey into the artistry of metal manipulation at
              Shadel Industry's state-of-the-art facility, nestled within the
              renowned Cairo International Convention Exhibition. Explore a
              realm of cutting-edge techniques and precision engineering, where
              we meticulously craft flawless sheet metal and press metal
              solutions. Enhance your outdoor spaces with our unparalleled
              shading solutions, thoughtfully designed to blend innovation with
              style. Choose excellence, choose Shadel Industry.
            </p>
          </div>
          <motion.div variants={variants} initial="hidden" whileInView="show">
            <motion.img
              src="/expo/r.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg w-full"
              variants={images}
            />
          </motion.div>
        </div>
      </div>
      <div className="  w-full h-full ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 px-10 lg:px-5 sm:px-28 ">
          <motion.div variants={variants} initial="hidden" whileInView="show">
            <motion.img
              src="/expo/r.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg w-full"
              variants={images}
            />
          </motion.div>

          <div>
            <div className="flex items-center ">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Certificate name
              </h2>
            </div>
            <p className="mt-4 text-black">
              Embark on a journey into the artistry of metal manipulation at
              Shadel Industry's state-of-the-art facility, nestled within the
              renowned Cairo International Convention Exhibition. Explore a
              realm of cutting-edge techniques and precision engineering, where
              we meticulously craft flawless sheet metal and press metal
              solutions. Enhance your outdoor spaces with our unparalleled
              shading solutions, thoughtfully designed to blend innovation with
              style. Choose excellence, choose Shadel Industry.
            </p>
          </div>
        </div>
      </div>
      <div className="  w-full h-full ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 px-10 lg:px-5 sm:px-28 ">
          <div>
            <div className="flex items-center ">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Certificate name
              </h2>
            </div>
            <p className="mt-4 text-black">
              Embark on a journey into the artistry of metal manipulation at
              Shadel Industry's state-of-the-art facility, nestled within the
              renowned Cairo International Convention Exhibition. Explore a
              realm of cutting-edge techniques and precision engineering, where
              we meticulously craft flawless sheet metal and press metal
              solutions. Enhance your outdoor spaces with our unparalleled
              shading solutions, thoughtfully designed to blend innovation with
              style. Choose excellence, choose Shadel Industry.
            </p>
          </div>
          <motion.div variants={variants} initial="hidden" whileInView="show">
            <motion.img
              src="/expo/r.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg w-full"
              variants={images}
            />
          </motion.div>
        </div>
      </div>
    </h1>
  )
}
