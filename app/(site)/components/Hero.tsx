"use client"
import { LazyMotion, domAnimation, m } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useContext } from "react"
import Link from "next/link"

function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="hero ">
        <div className="container mx-auto min-h-[80vh] px-4  ">
          <div className="flex flex-col gap-10 items-center pt-50">
            <m.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.7,
              }}
              className="shh w-full  justify-center gap-20   items-center"
            >
              <Image
                src="https://drive.google.com/uc?export=view&id=1E9n67LzNYQSWsMXSFpRXjhch4u_sRx9R"
                width={600}
                style={{
                  paddingTop: "15%",
                }}
                height={600}
                alt="hero section image"
                loading="lazy"
                className="object-contain"
              />
              <m.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 50,
                  delay: 1,
                }}
                className="hero-text  text-gray-900 font-bold py-10  w-[100%] lg:w-[70%] justify-start sm:justify-end "
              >
                Since 2001, SHADEL has been a leader in sheet metal fabrication,{" "}
                <br />
                specializing in stainless steel products at competitive prices.
                <br /> Our commitment to quality and innovation drives us,
                ensuring customer satisfaction.
              </m.p>
              <Link href="https://drive.google.com/file/d/1eKxEL6Y1SC_rZ3OT27mTwjjsYl3RFkTH/view?usp=drivesdk">
                <m.button style={{}} className="bhero mb-2 ">
                  SHADEL CATALOGUE{" "}
                </m.button>
              </Link>
            </m.div>
            {/* <Link href="/#Aboutus">
              <m.button
                style={{}}
                className="bhero mb-2 absolute bottom-[15%] right-5 bg-red-600"
              >
                Download Brochure
              </m.button>
            </Link> */}
            <Image
              className="hidden 2xl:block "
              src="https://drive.google.com/uc?export=view&id=1JG2BHRs9A39_JZWQg61IgiRkboAbXCzO"
              width={600}
              height={400}
              style={{ position: "absolute", right: 300, top: "25%" }}
              alt="hero section image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </LazyMotion>
  )
}

export default Hero
