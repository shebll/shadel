"use client"
import React from "react"
import Image from "next/image"
import { LazyMotion, domAnimation, m } from "framer-motion"
function HorizontalScrolling() {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 50,
          delay: 1.8,
        }}
        className="w-full flex justify-center py-6 sm:py-10 bg-gray-100"
      >
        <div className="slider">
          <div className="slider-track">
            <div className="slide">
              <Image
                src={"/brand-2.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-3.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-4.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-5.png"}
                height={100}
                width={110}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-6.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-7.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-8.png"}
                height={180}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-1.png"}
                height={120}
                width={120}
                alt="brand-1.png  "
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/gulf.png"}
                height={60}
                width={60}
                alt="brand-1.png  "
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-9.png"}
                height={180}
                width={120}
                alt="brand-1.png  "
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-10.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-11.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-12.png"}
                height={120}
                width={120}
                alt="brand-1.png  "
              ></Image>
            </div>

            <div className="slide">
              <Image
                src={"/brand-13.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-14.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>

            <div className="slide">
              <Image
                src={"/brand-15.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-16.png"}
                height={120}
                width={120}
                alt="brand-1.png  "
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brandx.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>

            <div className="slide">
              <Image
                src={"/brand-2.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-3.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-4.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-5.png"}
                height={100}
                width={110}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-6.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-7.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-8.png"}
                height={180}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-1.png"}
                height={120}
                width={120}
                alt="brand-1.png  "
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/gulf.png"}
                height={60}
                width={60}
                alt="brand-1.png  "
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-9.png"}
                height={180}
                width={120}
                alt="brand-1.png  "
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-10.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-11.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-12.png"}
                height={120}
                width={120}
                alt="brand-1.png  "
              ></Image>
            </div>

            <div className="slide">
              <Image
                src={"/brand-13.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-14.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>

            <div className="slide">
              <Image
                src={"/brand-15.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brand-16.png"}
                height={120}
                width={120}
                alt="brand-1.png  "
              ></Image>
            </div>
            <div className="slide">
              <Image
                src={"/brandx.png"}
                height={120}
                width={120}
                alt="brand-"
              ></Image>
            </div>
          </div>
        </div>
      </m.section>
    </LazyMotion>
  )
}

export default HorizontalScrolling
