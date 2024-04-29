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
    <h1 className="">
      <h2 className="section-heading text-gray-300 sm:text-white z-20 pt-28 absolute text-center justify-center ml-[40%] ">
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
      <div className="eventsbg"></div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="  w-full h-full ">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 px-10 lg:px-5 sm:px-28 ">
              <div>
                <div className="flex items-center " style={{ gap: "5%" }}>
                  <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
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
                  Shadel Industry's state-of-the-art facility, nestled within
                  the renowned Cairo International Convention Exhibition.
                  Explore a realm of cutting-edge techniques and precision
                  engineering, where we meticulously craft flawless sheet metal
                  and press metal solutions. Enhance your outdoor spaces with
                  our unparalleled shading solutions, thoughtfully designed to
                  blend innovation with style. Select excellence, select Shadel
                  Industry.
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-black">Highlights:</dt>
                    <dd className="mt-2 text-sm text-black">
                      <li>
                        Innovative Designs: Explore the latest trends and
                        technologies in shading.
                      </li>
                      <li>
                        Quality Craftsmanship: Learn about our commitment to
                        premium materials and skilled craftsmanship.
                      </li>
                      <li>
                        Customization Options: Discover versatile products
                        tailored to individual preferences and project
                        requirements.
                      </li>
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-black">Visit Us:</dt>
                    <dd className="mt-2 text-sm text-black">
                      Join us at MACTECH to experience the beauty and
                      functionality of our shading solutions. Our staff will be
                      on hand to guide you through our products.
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="  w-full h-full ">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 px-10 lg:px-5 sm:px-28 ">
              <div>
                <div className="flex items-center " style={{ gap: "5%" }}>
                  <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
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
                  Shadel Industry's showcase within the esteemed Cairo
                  International Convention Exhibition of 2022. Explore
                  cutting-edge techniques and precision engineering as we craft
                  flawless sheet metal and press metal solutions. Elevate your
                  outdoor spaces with our unmatched shading solutions, merging
                  innovation with elegance. Select excellence, select Shadel
                  Industry.
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-black">Highlights:</dt>
                    <dd className="mt-2 text-sm text-black">
                      <li>
                        Innovative Designs: Explore the latest trends and
                        technologies in shading.
                      </li>
                      <li>
                        Quality Craftsmanship: Learn about our commitment to
                        premium materials and skilled craftsmanship.
                      </li>
                      <li>
                        Customization Options: Discover versatile products
                        tailored to individual preferences and project
                        requirements.
                      </li>
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-black">Visit Us:</dt>
                    <dd className="mt-2 text-sm text-black">
                      Join us at MACTECH to experience the beauty and
                      functionality of our shading solutions. Our staff will be
                      on hand to guide you through our products.
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
        </SwiperSlide>
        <SwiperSlide>
          <div className=" sm:pt-6 ">
            <Image
              width={569}
              height={374}
              src="/bg/com.png" // Assuming "coming.png" is in the public directory
              className="w-[80%] z-10  ml-[10%] rounded-2xl"
              alt="" // Provide an appropriate alt text for accessibility
            />
            <div className="w-[80%] pt-10  block 2xl:hidden">
              <div className=" flex flex-col justify-center items-center pl-[15%] ">
                <h1 className=" text-xl font-bold mt-0">
                  Experience the Future
                </h1>
                <p>
                  Prepare to be captivated by the excitement and anticipation
                  surrounding the upcoming Shadel Exhibition. Set to take place
                  at Exhibition,
                  <br /> this eagerly awaited event promises an unforgettable
                  experience for all who attend. <br /> As you step into our
                  exhibit, you'll be greeted by a world of innovation and
                  creativity, where every detail is meticulously curated to
                  inspire awe and wonder. <br /> Explore the cutting-edge
                  advancements in metal manipulation, from flawless sheet metal
                  to precision-engineered solutions that push the boundaries of
                  possibility. <br /> Immerse yourself in the artistry of design
                  as we unveil our latest creations, each one a testament to
                  Shadel's unwavering commitment to excellence.
                </p>
                <h1 className="text-xl font-bold pt-5">
                  Elevate Your Outdoor Spaces
                </h1>
                <p>
                  Elevate your outdoor spaces with our bespoke shading
                  solutions, crafted to blend seamlessly with any environment.{" "}
                  <br /> Join us as we unveil the future of design and
                  technology. <br /> The countdown to greatness has begun -
                  don't miss your chance to be part of it. Select anticipation,
                  Select excitement, Select Shadel.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </h1>
  )
}
