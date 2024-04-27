"use client"
import Image from "next/image"
import React from "react"
import { LazyMotion, domAnimation, m } from "framer-motion"
import { motion } from "framer-motion"

function Aboutus() {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
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
        duration: 1.2,
        type: "spring",
        stiffness: 50,
      },
    },
  }

  return (
    <div className="vabout">
      <section id="Aboutus" className="text-white">
        <LazyMotion features={domAnimation}>
          <motion.div variants={variants} initial="hidden" whileInView="show">
            <m.div
              className=" container mx-auto px-6 py-20"
              style={{ color: "black" }}
            >
              <m.div
                initial={{ y: -150 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, type: "spring", stiffness: 50 }}
                className="row flex flex-col pb-10 "
              >
                <h2 className="section-heading text-gray-300">About Us</h2>
              </m.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols- gap-6">
                <m.div variants={images} className=" p-6 rounded shadow">
                  <h2 className="text-2xl font-bold mb-4 ">ABOUT SHADEL:</h2>
                  <div className="text-black">
                    <b>
                      {" "}
                      With a rich heritage dating back to 2001, SHADEL
                      officially established its presence in 2016.
                    </b>{" "}
                    <p>
                      Founded by visionary individuals passionate about
                      exceptional sheet metal fabrication, we've grown into a
                      leader in the Middle East. <br /> <b> SHADEL</b>{" "}
                      specialize in crafting top-notch stainless steel products
                      at competitive prices. Our commitment to quality is
                      evident in our state-of-the-art, custom-designed machines
                      that allow us to deliver tailored solutions efficiently
                      and reliably. By embracing advanced technologies like
                      laser cutting and welding, SHADEL guarantee unparalleled
                      results. <br /> At <b> SHADEL</b>, continuous improvement
                      is paramount. We implement Lean manufacturing principles,
                      Kaizen, and Six Sigma methodologies to stay ahead of the
                      curve. Our dedication to innovation, quality, and customer
                      satisfaction fuels our aspiration to redefine the
                      standards of sheet metal fabrication.
                    </p>
                  </div>
                </m.div>
                <div className=" p-6 rounded shadow">
                  <m.iframe
                    style={{ maxWidth: "100%" }}
                    width="560"
                    height="315"
                    src="https://drive.google.com/file/d/1_3oK9w9yhd9ul6jaFk8Qq3RgXQceYI5y/preview"
                    allowFullScreen
                    className=""
                  />
                </div>

                <div className=" p-6 rounded shadow">
                  <m.iframe
                    style={{ maxWidth: "100%" }}
                    width="560"
                    height="315"
                    src="https://drive.google.com/file/d/1R-y2BaeKhbjMQConf98-_riCOhBY3kR8/preview"
                    allowFullScreen
                    className=""
                  />
                </div>
                <m.div variants={images} className=" p-6 rounded shadow  ">
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ color: "black" }}
                  >
                    CORE VALUES:
                  </h2>
                  <p className="text-black text-justify justify-start sm:justify-end">
                    At <b style={{ color: "black" }}>SHADEL</b>, our core values
                    define who we are and how we operate. We prioritize
                    understanding and exceeding our clients' needs, building
                    trust and long-term relationships through unwavering
                    customer centricity. We are relentless in pursuing new
                    technologies and processes to deliver the most advanced
                    sheet metal solutions, driven by a commitment to
                    uncompromising quality. Exceptional craftsmanship and
                    utilizing the best materials and practices are paramount.
                    Operational excellence is at the heart of everything we do,
                    striving for efficiency in every aspect of our business to
                    deliver faster turnaround times and cost-effective
                    solutions. We foster a culture of continuous improvement,
                    constantly seeking ways to enhance our services and exceed
                    expectations. Finally, employee empowerment is a core value,
                    as we value our team members' expertise and dedication,
                    providing them with opportunities for growth and development
                    to contribute their best.
                  </p>
                </m.div>
                <m.div variants={images} className=" p-6 rounded shadow">
                  <h2 className="text-2xl font-bold mb-4">Mission</h2>
                  <p className="text-black text-justify justify-start sm:justify-end">
                    <b style={{ color: "black" }}> SHADEL’s VISION:</b>
                    <br />
                    <b> Industry benchmark:</b> Shadel aspires to be the
                    standard of excellence in sheet metal fabrication, defining
                    the industry's benchmarks for quality, efficiency, and
                    customer focus.
                    <br />
                    <b style={{ color: "black" }}> SHADEL’s MISION:</b>
                    <br />
                    <b>
                      {" "}
                      At SHADEL, we strive to be the leading choice for our
                      clients by exceeding their expectations every day. We
                      achieve this by:
                    </b>{" "}
                    <br /> • Delivering exceptional quality and innovative sheet
                    metal products at competitive prices. <br /> • Building
                    long-term relationships through dedicated customer service
                    and a commitment to continuous improvement. <br />•
                    Harnessing the latest technologies to ensure efficient and
                    reliable solutions that meet our clients' daily needs.
                    <br /> • Embracing a culture of continuous improvement,
                    driven by a relentless pursuit of customer satisfaction
                  </p>
                </m.div>
                <div className=" p-6 rounded shadow">
                  <m.iframe
                    style={{ maxWidth: "100%" }}
                    width="560"
                    height="315"
                    src="https://drive.google.com/file/d/1cxHcjDXvZ_MDA520WkCErWX2SkgFRPqr/preview"
                    allowFullScreen
                    className=""
                  />
                </div>
              </div>
            </m.div>
          </motion.div>
        </LazyMotion>{" "}
      </section>
    </div>
  )
}

export default Aboutus
