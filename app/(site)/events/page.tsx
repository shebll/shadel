"use client"
import { motion } from "framer-motion"
import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper/modules"
import Image from "next/image"
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
    x: 30,
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

export default function Aboutpage() {
  return (
    <div className="">
      <h2 className="section-heading text-gray-300 sm:text-white z-1 pt-28 absolute text-center justify-center ml-[40%] ">
        Events
      </h2>

      <Image
        width={840}
        height={697}
        src="https://drive.google.com/uc?export=view&id=1bcMtpzcDdRqFNBzUTXiJ6NRhPqBy0bGL"
        alt="bg"
        style={{
          height: "50vh",
          objectFit: "cover",
          width: "100%",
          position: "relative",
          zIndex: "-1",
          top: "3%",
          opacity: "1",
          right: "0",
        }}
      />
      {/* <div className="grid grid-cols-2 space-x-0 ml-[10%] pt-3 justify-center align-middle ">
        <iframe
          width={569}
          height={374}
          src="https://drive.google.com/file/d/1f686Wl0QOsa2D1-jAYrCO1DvLzmSyXOH/preview" // Assuming "coming.png" is in the public directory
          className="w-[70%] z-10  ml-[10%] rounded-2xl"
        />
        <iframe
          width={569}
          height={374}
          src="https://drive.google.com/file/d/19pkEXvTFvxvNDWp15WlVKYZIXs64col-/preview" // Assuming "coming.png" is in the public directory
          className="w-[70%] z-10  ml-[10%] rounded-2xl"
        />
      </div> */}
      <div className="eventsbg"></div>
      <div id="x1" className="  w-full h-full ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 px-10 lg:px-5 sm:px-28 ">
          <div>
            <div className="flex items-center " style={{ gap: "5%" }}>
              <h2 className="text-lg font-bold tracking-tight text-black sm:text-4xl">
                Saudi Food in Saudi Arabia
              </h2>
              <img
                src="/su.png"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                width={200}
              ></img>
            </div>
            <p className="mt-4 text-black">
              Embark on a culinary adventure at Expo Saudi Food in Saudi Arabia,
              hosted at the prestigious Riyadh International Convention &
              Exhibition Center. Discover a world of gourmet delights and
              innovative food solutions, where we bring together the finest in
              Saudi cuisine and international flavors. Experience the artistry
              of food preparation and presentation, designed to elevate your
              dining experience with unmatched quality and creativity.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-black">Highlights:</dt>
                <dd className="mt-2 text-sm text-black">
                  <li>
                    Innovative Cuisine: Explore the latest trends and
                    technologies in the food industry.
                  </li>
                  <li>
                    Quality Craftsmanship: Learn about our commitment to premium
                    ingredients and skilled culinary techniques.
                  </li>
                  <li>
                    Customization Options: Discover versatile food products
                    tailored to individual tastes and dietary requirements.
                  </li>
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-black">Visit Us:</dt>
                <dd className="mt-2 text-sm text-black">
                  Join us at Expo Saudi Food to experience the beauty and
                  functionality of our culinary offerings. Our team will be on
                  hand to guide you through our products and innovations.
                </dd>
              </div>
            </dl>
          </div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-6 lg:gap-8"
          >
            <motion.img
              src="/expo/z1.png"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100 "
              variants={images}
            />
            <motion.img
              src="/expo/z2.png"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
              variants={images}
            />
            <motion.img
              src="/expo/z3.png"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100 "
              variants={images}
            />
            <motion.img
              src="/expo/z4.png"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
              variants={images}
            />
            <motion.img
              src="/expo/z5.png"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
              variants={images}
            />
            <motion.img
              src="/expo/z6.png"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
              variants={images}
            />
          </motion.div>
        </div>
      </div>
      <div id="x2" className="  w-full h-full bg-gray-100 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 px-10 lg:px-5 sm:px-28 ">
          <div>
            <div className="flex items-center " style={{ gap: "5%" }}>
              <h2 className="text-lg font-bold tracking-tight text-black sm:text-4xl">
                MACTECH 2024
              </h2>
              <img
                src="/MACTECH.png"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                width={200}
              ></img>
            </div>
            <p className="mt-4 text-black">
              Embark on a journey into the artistry of metal manipulation at
              Shadel Industry's state-of-the-art facility, showcased at MACTECH
              2024 in Saudi Arabia. Explore a realm of cutting-edge techniques
              and precision engineering, where we meticulously craft flawless
              sheet metal and press metal solutions. Enhance your outdoor spaces
              with our unparalleled metal solutions, thoughtfully designed to
              blend innovation with style. Choose excellence, choose Shadel
              Industry.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-black">Highlights:</dt>
                <dd className="mt-2 text-sm text-black">
                  <li>
                    Innovative Designs: Explore the latest trends and
                    technologies
                  </li>
                  <li>
                    Quality Craftsmanship: Learn about our commitment to premium
                    materials and skilled craftsmanship.
                  </li>
                  <li>
                    Customization Options: Discover versatile products tailored
                    to individual preferences and project requirements.
                  </li>
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-black">Visit Us:</dt>
                <dd className="mt-2 text-sm text-black">
                  Join us at MACTECH 2024 to experience the beauty and
                  functionality of our metal solutions. Our staff will be on
                  hand to guide you through our products and innovations.
                </dd>
              </div>
            </dl>
          </div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-6 lg:gap-8"
          >
            <motion.img
              src="/expo/x1.png"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100 "
              variants={images}
            />
            <motion.img
              src="/expo/x2.png"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
              variants={images}
            />
            <motion.img
              src="/expo/x3.png"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100 "
              variants={images}
            />
            <motion.img
              src="/expo/x4.png"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
              variants={images}
            />
            <motion.img
              src="/expo/x5.png"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
              variants={images}
            />
            <motion.img
              src="/expo/x6.png"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
              variants={images}
            />
          </motion.div>
        </div>
      </div>
      <div id="x3" className="  w-full h-full ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 px-10 lg:px-5 sm:px-28 ">
          <div>
            <div className="flex items-center " style={{ gap: "5%" }}>
              <h2 className="text-lg font-bold tracking-tight text-black sm:text-4xl">
                MACTECH 2023
              </h2>
              <img
                src="/MACTECH.png"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                width={200}
              ></img>
            </div>
            <p className="mt-4 text-black">
              Embark on a journey into the artistry of metal manipulation at
              Shadel Industry's state-of-the-art facility, nestled within the
              renowned Cairo International Convention Exhibition. Explore a
              realm of cutting-edge techniques and precision engineering, where
              we meticulously craft flawless sheet metal and press metal
              solutions. Enhance your outdoor spaces with our unparalleled metal
              solutions, thoughtfully designed to blend innovation with style.
              Select excellence, select Shadel Industry.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-black">Highlights:</dt>
                <dd className="mt-2 text-sm text-black">
                  <li>
                    Innovative Designs: Explore the latest trends and
                    technologies in metal.
                  </li>
                  <li>
                    Quality Craftsmanship: Learn about our commitment to premium
                    materials and skilled craftsmanship.
                  </li>
                  <li>
                    Customization Options: Discover versatile products tailored
                    to individual preferences and project requirements.
                  </li>
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-black">Visit Us:</dt>
                <dd className="mt-2 text-sm text-black">
                  Join us at MACTECH to experience the beauty and functionality
                  of our metal solutions. Our staff will be on hand to guide you
                  through our products.
                </dd>
              </div>
            </dl>
          </div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-6 lg:gap-8"
          >
            <motion.img
              src="/show-1.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100 "
              variants={images}
            />
            <motion.img
              src="/show-5.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
              variants={images}
            />
            <motion.img
              src="/show-3.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100 "
              variants={images}
            />
            <motion.img
              src="/show-4.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
              variants={images}
            />
            <motion.video
              autoPlay
              loop
              muted
              className="rounded-lg bg-gray-100 "
              variants={images}
            >
              <source src="/video-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
            <motion.video
              autoPlay
              loop
              muted
              className="rounded-lg bg-gray-100 "
              variants={images}
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          </motion.div>
        </div>
      </div>

      <div id="x4" className="  w-full h-full bg-gray-100 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 px-10 lg:px-5 sm:px-28 ">
          <div>
            <div className="flex items-center " style={{ gap: "5%" }}>
              <h2 className="text-lg font-bold tracking-tight text-black sm:text-4xl">
                MACTECH 2022
              </h2>
              <img
                src="/MACTECH.png"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                width={200}
              ></img>
            </div>
            <p className="mt-4 text-black">
              Embark on a journey into the artistry of metal manipulation at
              Shadel Industry's showcase within the esteemed Cairo International
              Convention Exhibition of 2022. Explore cutting-edge techniques and
              precision engineering as we craft flawless sheet metal and press
              metal solutions. Elevate your outdoor spaces with our unmatched
              metal solutions, merging innovation with elegance. Select
              excellence, select Shadel Industry.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-black">Highlights:</dt>
                <dd className="mt-2 text-sm text-black">
                  <li>
                    Innovative Designs: Explore the latest trends and
                    technologies in metal.
                  </li>
                  <li>
                    Quality Craftsmanship: Learn about our commitment to premium
                    materials and skilled craftsmanship.
                  </li>
                  <li>
                    Customization Options: Discover versatile products tailored
                    to individual preferences and project requirements.
                  </li>
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-black">Visit Us:</dt>
                <dd className="mt-2 text-sm text-black">
                  Join us at MACTECH to experience the beauty and functionality
                  of our metal solutions. Our staff will be on hand to guide you
                  through our products.
                </dd>
              </div>
            </dl>
          </div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-6 lg:gap-8"
          >
            <motion.img
              src="/expo/1.JPG"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100 "
              variants={images}
            />
            <motion.img
              src="/expo/2.JPG"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
              variants={images}
            />
            <motion.img
              src="/expo/3.JPG"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100 "
              variants={images}
            />
            <motion.img
              src="/expo/4.JPG"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
              variants={images}
            />
            <motion.video
              src="/expo/v1.mp4"
              className="rounded-lg bg-gray-100 "
              variants={images}
              autoPlay
              loop
              muted
            />
            <motion.video
              src="/expo/v2.mp4"
              className="rounded-lg bg-gray-100"
              variants={images}
              autoPlay
              loop
              muted
            />
          </motion.div>
        </div>
      </div>

      <div className=" sm:pt-6 ">
        <Image
          width={569}
          height={374}
          src="/bg/com.png" // Assuming "coming.png" is in the public directory
          className="w-[80%] z-10  ml-[10%] rounded-2xl"
          alt="" // Provide an appropriate alt text for accessibility
        />
      </div>
    </div>
  )
}
