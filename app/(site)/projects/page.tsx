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
    <div id="projects" className="pt-12 regular-text">
      <div className=" ">
        <img src="/bg/x.jpeg" className="w-full z-10 pt-10 sm:pt-0" alt="" />
      </div>
      <div id="x1" className=" projectsx pt-16  w-full h-full ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 px-10 lg:px-5 sm:px-28 ">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Central Kitchen Operations
            </h2>
            <p className="mt-4 text-gray-500">
              Our collaborative endeavor focused on revolutionizing central
              kitchen operations through the integration of advanced sheet metal
              solutions.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 ">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Challenges and Solutions:{" "}
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Overcoming integration complexities demanded innovative
                  solutions. We devised modular sheet metal designs tailored to
                  seamlessly integrate with existing infrastructures, ensuring
                  minimal disruption and maximum efficiency enhancement.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Technologies and Tools:
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Leveraging state-of-the-art sheet metal fabrication techniques
                  and precision tools, we crafted bespoke solutions. Our
                  utilization of advanced machinery and software facilitated the
                  production of intricate designs with unparalleled accuracy,
                  setting new benchmarks for efficiency and quality.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Results and Impact:
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  The implementation of our sheet metal solutions yielded
                  tangible results, including substantial cost savings and
                  streamlined production processes. By optimizing workflows and
                  minimizing material waste, we enabled our clients to achieve
                  remarkable efficiency gains and bolster their bottom line.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Success Metrics: </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Our efforts culminated in tangible improvements across all
                  fronts. From enhanced kitchen functionality to significant
                  cost reductions, our clients experienced a transformative
                  shift in their operations. The overwhelmingly positive
                  feedback underscored the impact of our solutions on client
                  satisfaction and operational excellence
                </dd>
              </div>
            </dl>
          </div>
          <div className="pro-img ">
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
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full "
                  variants={images}
                />
              </div>
              <div className=" h-[90%] w-[90%]">
                <motion.img
                  src="/projects/x-2.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full  "
                  variants={images}
                />
              </div>
              <div className=" h-[90%] w-[90%]">
                <motion.img
                  src="/projects/x-3.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full"
                  variants={images}
                />
              </div>
              <div className=" h-[90%] w-[90%] ">
                <motion.img
                  src="/projects/x-4.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full"
                  variants={images}
                />
              </div>
              <div className=" h-[90%] w-[90%]">
                <motion.img
                  src="/projects/x-6.jpeg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full"
                  variants={images}
                />
              </div>
              <div className=" h-[90%] w-[90%] ">
                <motion.img
                  src="/projects/x-5.png"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full"
                  variants={images}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div id="x2" className=" projectsx bg-gray-100  w-full h-full ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 px-10 lg:px-5 sm:px-28 ">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Prouduction Line Turn Key
            </h2>
            <p className="mt-4 text-gray-500">
              Our project with Shadel Industrial Company includes development
              and... Implement a turnkey production pipeline for them Innovative
              manufacturing solutions emerge in Cairo International conference
              exhibition
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 ">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Challenges and Solutions:{" "}
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  One challenge we faced was integrating diverse manufacturing
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
                  automation tools, and cloud-based collaboration platforms to
                  streamline the production process and ensure precision in
                  manufacturing.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Results and Impact:
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  As a result of our collaboration, Shadel Industry experienced
                  a significant reduction in production lead times, leading to
                  improved efficiency and cost savings. Additionally, client
                  feedback highlighted the enhanced quality and versatility of
                  their manufacturing solutions.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Success Metrics: </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Our implementation of optimized production workflows led to a
                  30% increase in overall efficiency and a 20% reduction in
                  manufacturing costs for Shadel Industry. Moreover, customer
                  satisfaction ratings soared by 25% due to the enhanced quality
                  and customization options offered.
                </dd>
              </div>
            </dl>
          </div>
          <div className="pro-img pt-[10%]">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="show"
              className="grid grid-cols-2 grid-rows-3 gap-2 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-2"
            >
              <div className=" h-[80%] w-[90%] ">
                <motion.img
                  src="/projects/p-1.jpg"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full "
                  variants={images}
                />
              </div>
              <div className=" h-[80%] w-[90%]">
                <motion.img
                  src="/projects/p-4.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full  "
                  variants={images}
                />
              </div>
              <div className=" h-[80%] w-[90%]">
                <motion.img
                  src="/projects/p-2.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full"
                  variants={images}
                />
              </div>
              <div className=" h-[80%] w-[90%]">
                <motion.img
                  src="/projects/p-3.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full"
                  variants={images}
                />
              </div>
              <div className=" h-[80%] w-[90%]">
                <motion.img
                  src="/projects/p-5.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full"
                  variants={images}
                />
              </div>
              <div className=" h-[80%] w-[90%]">
                <motion.img
                  src="/projects/p-6.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full"
                  variants={images}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div id="x3" className=" projectsx  pt-16 w-full h-full ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 px-10 lg:px-5 sm:px-28 ">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Engineering consultancies{" "}
            </h2>
            <p className="mt-4 text-gray-500">
              Engineering consultancies play a crucial role in various
              industries by offering specialized knowledge, skills, and advice
              to organizations that require expert guidance in
              engineering-related projects. These consultancies can vary in size
              and expertise, providing services that encompass everything from
              initial planning and design to implementation and maintenance of
              engineering projects.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 ">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Civil Engineering:
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  consultancies in this area offer services related to the
                  design, construction, and maintenance of infrastructure
                  projects such as roads, bridges, buildings, and water supply
                  systems. They ensure that structures are safe, sustainable,
                  and compliant with regulations.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Mechanical Engineering:
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  These consultancies provide expertise in the design and
                  manufacture of mechanical systems and devices. They often work
                  on projects involving machinery, HVAC systems, automotive
                  engineering, and industrial equipment.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Electrical Engineering:{" "}
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Electrical engineering consultancies focus on the design,
                  development, and maintenance of electrical systems. Their
                  services are crucial in sectors such as power generation and
                  distribution, telecommunications, and electronics.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Structural Engineering:{" "}
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Specialized consultancies in this field deal with the analysis
                  and design of structures that support or resist loads,
                  including buildings, bridges, and tunnels. They ensure that
                  these structures are stable and safe for use.
                </dd>
              </div>
            </dl>
          </div>
          <div className="pro-img ">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="show"
              className="grid grid-cols-2 grid-rows-3   sm:grid-cols-2 lg:grid-cols-2"
            >
              {/* uc?export=view&id= */}
              <div className=" h-[90%] w-[90%]">
                <motion.img
                  src="/xv/1.png"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full "
                  variants={images}
                />
              </div>
              <div className=" h-[90%] w-[90%]">
                <motion.img
                  src="/xv/2.png"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full  "
                  variants={images}
                />
              </div>
              <div className=" h-[90%] w-[90%]">
                <motion.img
                  src="/xv/3.png"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full"
                  variants={images}
                />
              </div>
              <div className=" h-[90%] w-[90%] ">
                <motion.img
                  src="/xv/4.png"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full"
                  variants={images}
                />
              </div>
              <div className=" h-[90%] w-[90%]">
                <motion.img
                  src="/xv/5.png"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full"
                  variants={images}
                />
              </div>
              <div className=" h-[90%] w-[90%] ">
                <motion.img
                  src="/xv/6.png"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full"
                  variants={images}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div id="x4" className=" projectsx pt-16  w-full h-full bg-gray-100">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 px-10 lg:px-5 sm:px-28 ">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Industrial Sectors
            </h2>
            <p className="mt-4 text-gray-500">
              Industrial sectors are diverse fields of economic activity where
              businesses produce goods or provide services. These sectors
              encompass various industries, each characterized by specific types
              of operations, technologies, and economic activities.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 ">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Manufacturing:</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  This sector involves the transformation of raw materials into
                  finished goods through processes such as machining, assembly,
                  and production line work. It includes industries such as
                  automotive, electronics, textiles, and consumer goods.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Construction:</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  The construction sector focuses on the building of
                  infrastructure, including residential, commercial, and
                  industrial structures. It also involves civil engineering
                  projects like roads, bridges, and dams.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Energy:</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  This sector encompasses the production and distribution of
                  energy, including traditional sources like oil, gas, and coal,
                  as well as renewable sources such as solar, wind, and
                  hydroelectric power.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Transportation and Logistics:{" "}
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  This sector focuses on the movement of goods and people,
                  including industries such as automotive, aerospace, shipping,
                  and logistics services.
                </dd>
              </div>
            </dl>
          </div>
          <div className="pro-img ">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="show"
              className="grid grid-cols-2 grid-rows-3   sm:grid-cols-2 lg:grid-cols-2"
            >
              <div className=" h-[90%] w-[90%]">
                <motion.img
                  src="/xv/12.jpg"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full "
                  variants={images}
                />
              </div>
              <div className=" h-[90%] w-[90%]">
                <motion.img
                  src="/xv/7.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full  "
                  variants={images}
                />
              </div>
              <div className=" h-[90%] w-[90%]">
                <motion.img
                  src="/xv/8.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full"
                  variants={images}
                />
              </div>
              <div className=" h-[90%] w-[90%] ">
                <motion.img
                  src="/xv/9.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full"
                  variants={images}
                />
              </div>
              <div className=" h-[90%] w-[90%]">
                <motion.img
                  src="/xv/11.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full"
                  variants={images}
                />
              </div>
              <div className=" h-[90%] w-[90%] ">
                <motion.img
                  src="/xv/10.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-800 sm:object-cover sm:h-full"
                  variants={images}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
