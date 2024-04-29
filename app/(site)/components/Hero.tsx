"use client"
import { LazyMotion, domAnimation, m } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useContext } from "react"
import Link from "next/link"

function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="hero ">
        <div className="container mx-auto min-h-[76vh] px-4">
          <div className="flex flex-col items-center gap-10 pt-[10%]">
            <m.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.7,
              }}
              className="items-center justify-center w-[85%] gap-10"
            >
              <div className="flex items-center justify-between  pt-20 lg:pt-0">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1E9n67LzNYQSWsMXSFpRXjhch4u_sRx9R"
                  width={400}
                  height={400}
                  alt="hero section image"
                  loading="lazy"
                  className="object-contain"
                />
                <Image
                  className="hidden 2xl:block pt-5 "
                  src="/shadel.png"
                  width={400}
                  height={400}
                  alt="hero section image"
                  loading="lazy"
                />
              </div>
              <m.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 50,
                  delay: 1,
                }}
                className="hero-text  sm:pt-10 pt-0 sm:py-3 py-5 text-gray-900 font-bold w-[100%] lg:w-[70%] justify-start sm:justify-end "
              >
                Since 2001, SHADEL has been a leader in sheet metal fabrication,{" "}
                <br />
                specializing in stainless steel products at competitive prices.
                <br /> Our commitment to quality and innovation drives us,
                ensuring customer satisfaction.
              </m.p>
              <Link href="https://drive.google.com/file/d/1eKxEL6Y1SC_rZ3OT27mTwjjsYl3RFkTH/view?usp=drivesdk">
                <m.button style={{}} className="mb-2 bhero ">
                  SHADEL CATALOGUE{" "}
                </m.button>
              </Link>
            </m.div>
          </div>
        </div>
      </div>
    </LazyMotion>
  )
}

export default Hero
