"use client"
import Image from "next/image"
import React from "react"
import { LazyMotion, domAnimation, m } from "framer-motion"

function Services() {
  const servicesData = [
    {
      name: "After-Sales Services",
      content:
        "We offer comprehensive after-sales services for central kitchen products, machinery, and factories to ensure optimal performance and longevity.",
    },
    {
      name: "Maintenance Contracts",
      content:
        "We provide maintenance contracts for factories and other products to ensure they run smoothly and efficiently.",
    },
    {
      name: "Raw Material Supply",
      content:
        "We provide all necessary raw materials to support your operations.",
    },
    {
      name: "Utensil Supply",
      content:
        "We offer a wide range of pots, basins, and hospital brushes to meet your specific needs",
    },
    {
      name: "Complete Studies",
      content:
        "We provide comprehensive studies for central kitchens, governmental hospitals, ships, and large restaurants. Our studies cover all requirements, including boilers, generators, steam lines, supporting tools, operations, and training. ",
    },
    {
      name: "Facility Layout Planning",
      content:
        "We offer comprehensive studies and designs for factories, encompassing production lines, products, human labor, infrastructure, machinery, and operations.",
    },
  ]

  return (
    <div className="serv">
      <section
        id="services"
        className="container mx-auto min-h-screen pt-[70px] "
      >
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ y: -150 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="row flex flex-col pb-10 "
          >
            <h2 className="section-heading text-gray-300 sm:text-white">
              Services
            </h2>
          </m.div>
          <div className="row">
            {servicesData.map((service, i) => (
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 + 0.5 }}
                key={i}
                className="column"
              >
                <div className="card">
                  <div className="icon-wrapper ">
                    <Image
                      src={`/icon-${i + 1}.png`}
                      width={60}
                      height={60}
                      alt="services"
                    />
                  </div>
                  <h3>{service.name}</h3>
                  <p>{service.content}</p>
                </div>
              </m.div>
            ))}
          </div>
        </LazyMotion>
      </section>
    </div>
  )
}

export default Services
