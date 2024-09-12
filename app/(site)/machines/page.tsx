"use client"
import Image from "next/image"
import Link from "next/link"
import { LazyMotion, domAnimation, m } from "framer-motion"
import Script from "next/script"
function AllMachines() {
  return (
    <div className="prooo " id="leftxx">
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XLESEE5RRC`} // Replace with your GA4 ID
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XLESEE5RRC');
        `}
      </Script>
      <Image
        width={1080}
        height={365}
        src="https://drive.google.com/uc?export=view&id=1iyxzKQmayyP6gcocVJAwhDbhCCOULEge"
        alt="bg"
        style={{
          height: "50vh",
          objectFit: "cover",
          width: "100%",
          position: "absolute",
          zIndex: "-1",
          top: "5%",
          right: "0",
        }}
      />
      <LazyMotion features={domAnimation}>
        <section
          id="allmachines"
          className="container mx-auto py-[120px] flex flex-col gap-20 px-4"
        >
          <m.div
            initial={{ y: -150 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className=""
          >
            <h1 className="text-white section-heading">Machines</h1>
          </m.div>
          <div className="flex flex-col items-center gap-20 sm:grid sm:grid-cols-3 lg:flex-row">
            <m.div
              initial={{ y: 250 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.15,
              }}
              className="flex flex-col overflow-hidden bg-white shadow-2xl rounded-2xl"
            >
              <div className="overflow-hidden md:h-[300px] shadow-sm">
                <Image
                  src={
                    "https://drive.google.com/uc?export=view&id=1nio75Fa_yJsMcfKF8mNkr8DbfN4ufM3e"
                  }
                  alt="image"
                  width={900}
                  height={150}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8 ">
                <h2 className="text-2xl font-bold">Press brake</h2>
                <p>
                  Providing precise braking solutions, our bress brakes ensure
                  safety and efficiency in diverse industries, enhancing
                  performance and reliability seamlessly.
                </p>
                <Link
                  href={"/machine?type=brake"}
                  className="w-full py-4 font-bold text-center text-white transition-all bg-red-600 rounded-xl hover:bg-gray-500"
                >
                  See More
                </Link>
              </div>
            </m.div>
            <m.div
              initial={{ y: 250 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.1,
              }}
              className="flex flex-col overflow-hidden bg-white shadow-2xl rounded-2xl"
            >
              <div className="overflow-hidden md:h-[300px]">
                <Image
                  src={
                    "https://drive.google.com/uc?export=view&id=1AmtOYLhGrXDHt557d8VhjkkWQEig-m1u"
                  }
                  alt="image"
                  width={900}
                  height={150}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8">
                <h2 className="text-2xl font-bold">Shear Machines</h2>
                <p>
                  Delivering sheer precision, our shear tools ensure seamless
                  cutting in various applications, guaranteeing accuracy and
                  efficiency for enhanced productivity .
                </p>
                <Link
                  href={"/machine?type=shear"}
                  className="w-full py-4 font-bold text-center text-white transition-all bg-red-600 rounded-xl hover:bg-gray-500"
                >
                  See More
                </Link>
              </div>
            </m.div>{" "}
            <m.div
              initial={{ y: 250 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.1,
              }}
              className="flex flex-col overflow-hidden bg-white shadow-2xl rounded-2xl"
            >
              <div className="overflow-hidden md:h-[300px]">
                <Image
                  src={
                    "https://drive.google.com/uc?export=view&id=15HTuU2k0DvLC6sXHbVk0KM2sTjOKk2PN"
                  }
                  alt="image"
                  width={900}
                  height={150}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8">
                <h2 className="text-2xl font-bold">Laser Machine</h2>
                <p>
                  Utilizing cutting-edge laser technology, our systems offer
                  unparalleled precision and versatility, empowering industries
                  with efficient and precise material processing capabilities.
                </p>
                <Link
                  href={"/machine?type=laser"}
                  className="w-full py-4 font-bold text-center text-white transition-all bg-red-600 rounded-xl hover:bg-gray-500"
                >
                  See More
                </Link>
              </div>
            </m.div>
          </div>
          <div className="flex flex-col items-center gap-20 sm:grid sm:grid-cols-3 lg:flex-row">
            <m.div
              initial={{ y: 250 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.15,
              }}
              className="flex flex-col overflow-hidden bg-white shadow-2xl rounded-2xl"
            >
              <div className="overflow-hidden md:h-[300px] shadow-sm">
                <Image
                  src={
                    "https://drive.google.com/uc?export=view&id=1zYaQZ63qjmFvx3XAF8zM9HuBpTKvaOhF"
                  }
                  alt="image"
                  width={900}
                  height={150}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8 ">
                <h2 className="text-2xl font-bold">Rollers Machine</h2>
                <p>
                  With durable rollers, <br /> our systems facilitate smooth
                  material movement, ensuring efficient processing and optimal
                  productivity across various industrial applications.
                </p>
                <Link
                  href={"/machine?type=rolling"}
                  className="w-full py-4 font-bold text-center text-white transition-all bg-red-600 rounded-xl hover:bg-gray-500"
                >
                  See More
                </Link>
              </div>
            </m.div>
            <m.div
              initial={{ y: 250 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.1,
              }}
              className="flex flex-col overflow-hidden bg-white shadow-2xl rounded-2xl"
            >
              <div className="overflow-hidden md:h-[300px]">
                <Image
                  src={
                    "https://drive.google.com/uc?export=view&id=1reYFB6AKnCLKrkyslfe8i0xGRGU5v-RL"
                  }
                  alt="image"
                  width={900}
                  height={150}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8">
                <h2 className="text-2xl font-bold">Punching Machine</h2>
                <p>
                  Our punching machines boast superior precision and efficiency,
                  seamlessly integrating into production lines to deliver
                  accurate and high-speed punching operations for diverse
                  applications.
                </p>
                <Link
                  href={"/machine?type=press"}
                  className="w-full py-4 font-bold text-center text-white transition-all bg-red-600 rounded-xl hover:bg-gray-500"
                >
                  See More
                </Link>
              </div>
            </m.div>{" "}
            <m.div
              initial={{ y: 250 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.1,
              }}
              className="flex flex-col overflow-hidden bg-white shadow-2xl rounded-2xl"
            >
              <div className="overflow-hidden md:h-[300px]">
                <Image
                  src={
                    "https://drive.google.com/uc?export=view&id=1CXDYcYr2NlkyB0eUc-CzpIGrpTCXotSm"
                  }
                  alt="image"
                  width={900}
                  height={150}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8">
                <h2 className="text-2xl font-bold">Bender Machines</h2>
                <p>
                  Our bender machines offer exceptional flexibility and
                  accuracy, enabling seamless bending of various materials with
                  precision control and enhanced productivity for diverse
                  applications.
                </p>
                <Link
                  href={"/machine?type=bind"}
                  className="w-full py-4 font-bold text-center text-white transition-all bg-red-600 rounded-xl hover:bg-gray-500"
                >
                  See More
                </Link>
              </div>
            </m.div>
          </div>
        </section>
      </LazyMotion>
      {/* <AllMachines /> */}
    </div>
  )
}
//
export default AllMachines
