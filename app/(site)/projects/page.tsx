"use client"
import { motion } from "framer-motion"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper/modules"
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
// bgproject
export default function Projects() {
  return (
    <h1 id="projects" className="pt-12">
      <div className=" ">
        <img src="prox.jpg" className="w-full z-10 pt-10 sm:pt-0" alt="" />
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className=" projectsx  w-full h-full ">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 px-10 lg:px-5 sm:px-28 ">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Prouduction Line Turn Key
                </h2>
                <p className="mt-4 text-gray-500">
                  Our project with Shadel Industry involved the development and
                  implementation of a turnkey production pipeline for their
                  innovative shading solutions showcased at the Cairo
                  International Convention Exhibition
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 ">
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">
                      Challenges and Solutions:{" "}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      One challenge we faced was integrating diverse shading
                      solutions into a unified production pipeline. To overcome
                      this, we implemented a modular approach that allowed for
                      seamless integration and customization.
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">
                      Technologies and Tools:
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      We leveraged cutting-edge 3D modeling software, advanced
                      automation tools, and cloud-based collaboration platforms
                      to streamline the production process and ensure precision
                      in manufacturing.
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">
                      Results and Impact:
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      As a result of our collaboration, Shadel Industry
                      experienced a significant reduction in production lead
                      times, leading to improved efficiency and cost savings.
                      Additionally, client feedback highlighted the enhanced
                      quality and versatility of their shading solutions.
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">
                      Success Metrics:{" "}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      Our implementation of optimized production workflows led
                      to a 30% increase in overall efficiency and a 20%
                      reduction in manufacturing costs for Shadel Industry.
                      Moreover, customer satisfaction ratings soared by 25% due
                      to the enhanced quality and customization options offered.
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="pro-img lg:pt-[50%]">
                <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="show"
                  className="grid grid-cols-2 grid-rows-3 gap-2 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-2"
                >
                  <div className=" h-full w-full">
                    <motion.img
                      src="/projects/p-1.jpg"
                      alt="Side of walnut card tray with card groove and recessed card area."
                      className="rounded-lg bg-gray-800 object-cover h-full "
                      variants={images}
                    />
                  </div>
                  <div className=" h-full w-full">
                    <motion.img
                      src="/projects/p-4.jpg"
                      alt="Walnut card tray filled with cards and card angled in dedicated groove."
                      className="rounded-lg bg-gray-800 object-cover h-full  "
                      variants={images}
                    />
                  </div>
                  <div className=" h-full w-full">
                    <motion.img
                      src="/projects/p-2.jpg"
                      alt="Walnut card tray filled with cards and card angled in dedicated groove."
                      className="rounded-lg bg-gray-800 object-cover h-full"
                      variants={images}
                    />
                  </div>
                  <div className=" h-full w-full">
                    <motion.img
                      src="/projects/p-3.jpg"
                      alt="Walnut card tray filled with cards and card angled in dedicated groove."
                      className="rounded-lg bg-gray-800 object-cover h-full"
                      variants={images}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" projectsx pt-16  w-full h-full ">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 px-10 lg:px-5 sm:px-28 ">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Central Kitchen Operations
                </h2>
                <p className="mt-4 text-gray-500">
                  Our collaborative endeavor focused on revolutionizing central
                  kitchen operations through the integration of advanced sheet
                  metal solutions.
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 ">
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">
                      Challenges and Solutions:{" "}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      Overcoming integration complexities demanded innovative
                      solutions. We devised modular sheet metal designs tailored
                      to seamlessly integrate with existing infrastructures,
                      ensuring minimal disruption and maximum efficiency
                      enhancement.
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">
                      Technologies and Tools:
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      Leveraging state-of-the-art sheet metal fabrication
                      techniques and precision tools, we crafted bespoke
                      solutions. Our utilization of advanced machinery and
                      software facilitated the production of intricate designs
                      with unparalleled accuracy, setting new benchmarks for
                      efficiency and quality.
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">
                      Results and Impact:
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      The implementation of our sheet metal solutions yielded
                      tangible results, including substantial cost savings and
                      streamlined production processes. By optimizing workflows
                      and minimizing material waste, we enabled our clients to
                      achieve remarkable efficiency gains and bolster their
                      bottom line.
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">
                      Success Metrics:{" "}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      Our efforts culminated in tangible improvements across all
                      fronts. From enhanced kitchen functionality to significant
                      cost reductions, our clients experienced a transformative
                      shift in their operations. The overwhelmingly positive
                      feedback underscored the impact of our solutions on client
                      satisfaction and operational excellence
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">
                      industry Focus:
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      Our expertise extends across various industries,
                      reflecting our ability to cater to diverse client needs.
                      By demonstrating adaptability and innovation, we showcased
                      our capacity to deliver tailored solutions that drive
                      success in central kitchen environments of all kinds.
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="pro-img pt-[10%]">
                <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="show"
                  className="grid grid-cols-2 grid-rows-3   sm:grid-cols-2 lg:grid-cols-2"
                >
                  <div className=" h-[90%] w-[90%]">
                    <motion.img
                      src="/projects/x-1.jpg"
                      alt="Side of walnut card tray with card groove and recessed card area."
                      className="rounded-lg bg-gray-800 object-cover h-full "
                      variants={images}
                    />
                  </div>
                  <div className=" h-[90%] w-[90%]">
                    <motion.img
                      src="/projects/x-2.jpg"
                      alt="Walnut card tray filled with cards and card angled in dedicated groove."
                      className="rounded-lg bg-gray-800 object-cover h-full  "
                      variants={images}
                    />
                  </div>
                  <div className=" h-[90%] w-[90%]">
                    <motion.img
                      src="/projects/x-3.jpg"
                      alt="Walnut card tray filled with cards and card angled in dedicated groove."
                      className="rounded-lg bg-gray-800 object-cover h-full"
                      variants={images}
                    />
                  </div>
                  <div className=" h-[90%] w-[90%]">
                    <motion.img
                      src="/projects/x-4.jpg"
                      alt="Walnut card tray filled with cards and card angled in dedicated groove."
                      className="rounded-lg bg-gray-800 object-cover h-full"
                      variants={images}
                    />
                  </div>
                  <div className=" h-[90%] w-[90%]">
                    <motion.img
                      src="/projects/x-6.jpeg"
                      alt="Walnut card tray filled with cards and card angled in dedicated groove."
                      className="rounded-lg bg-gray-800 object-cover h-full"
                      variants={images}
                    />
                  </div>
                  <div className=" h-[90%] w-[90%] ">
                    <motion.img
                      src="/projects/x-5.jpg"
                      alt="Walnut card tray filled with cards and card angled in dedicated groove."
                      className="rounded-lg bg-gray-800 object-cover h-full"
                      variants={images}
                      style={{ width: "115%" }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </h1>
  )
}
