"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { LazyMotion, domAnimation, m } from "framer-motion"
import { getProducts } from "@/sanity/sanity-utils"
import ProductMachineType from "@/types/Product"
import { useRouter } from "next/router"
import AllMachines from "../machines/page"
import Script from "next/script"
function AllProducts() {
  const [products, setProducts] = useState<ProductMachineType[]>([])
  const [selectedType, setSelectedType] = useState("")

  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await getProducts(selectedType)
      setProducts(fetchedProducts)
    }
    fetchData()
  }, [selectedType])

  const handleSeeMore = (selectedType: string) => {
    // Handle navigation directly here
    window.location.href = `/product?selectedType=${selectedType}`
  }

  return (
    <div className="prooo  " id="leftxx">
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
        src="https://drive.google.com/uc?export=view&id=1eHo4jATgYA3ArSab9QW_bFXCk6FLQ2cE"
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
          id="allProduct"
          className="container mx-auto py-[120px] flex flex-col gap-20 px-4"
        >
          <m.div
            initial={{ y: -150 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className=""
          >
            <h1 className="section-heading text-white">Products</h1>
          </m.div>
          <div className="sm:grid sm:grid-cols-3 flex items-center gap-20 flex-col lg:flex-row">
            <m.div
              initial={{ y: 250 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.15,
              }}
              className="flex flex-col rounded-2xl shadow-2xl overflow-hidden bg-white"
            >
              <div className="overflow-hidden md:h-[300px]">
                <Image
                  src={
                    "https://drive.google.com/uc?export=view&id=1YliqN7_Cn0igXzT5NOyBGsgWow-DLz3x"
                  }
                  alt="image"
                  width={900}
                  height={150}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8 ">
                <h2 className="text-2xl font-bold">Central Kitchen</h2>
                <p>
                  Revolutionize your kitchen with our central appliance hub,
                  simplifying meal prep and enhancing functionality for ultimate
                  culinary convenience.
                </p>
                <Link
                  href={"/product?type=hot"}
                  className="bg-red-600 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-gray-500 transition-all"
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
              className="flex flex-col rounded-2xl shadow-2xl overflow-hidden bg-white"
            >
              <div className="overflow-hidden md:h-[300px]">
                <Image
                  src={
                    "https://drive.google.com/uc?export=view&id=1LizFy3GfqvCpOtjzCbKvW0c7cwiAqiEs"
                  }
                  alt="image"
                  width={900}
                  height={150}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8">
                <h2 className="text-2xl font-bold">Hotel Equipment</h2>
                <p>
                  Elevate your hospitality business with our comprehensive range
                  of top-quality hotel equipment, ensuring exceptional guest
                  experiences and operational efficiency.
                </p>
                <Link
                  href={"/product?type=kitchen"}
                  className="bg-red-600 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-gray-500 transition-all"
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
                delay: 0.15,
              }}
              className="flex flex-col rounded-2xl shadow-2xl overflow-hidden bg-white"
            >
              <div className="overflow-hidden md:h-[300px] shadow-sm">
                <Image
                  // https://drive.google.com/file/d/1KQ2RFIzKEF8svvTwZfO8n3qv5vsgpDa8/view?usp=drive_link
                  src={
                    "https://drive.google.com/uc?export=view&id=1KQ2RFIzKEF8svvTwZfO8n3qv5vsgpDa8"
                  }
                  alt="image"
                  width={900}
                  height={150}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8 ">
                <h2 className="text-2xl font-bold">Kitchen Utensils</h2>
                <p>
                  Utensil Supply is your one-stop destination for high-quality
                  kitchen tools, providing everything you need to elevate your
                  cooking experience to the next level.
                </p>
                <Link
                  href={"/product?type=utensils"}
                  className="bg-red-600 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-gray-500 transition-all"
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
              className="flex flex-col  rounded-2xl shadow-2xl overflow-hidden bg-white"
            >
              <div className="overflow-hidden md:h-[300px]">
                <Image
                  src={
                    "https://drive.google.com/uc?export=view&id=1mqFwKIFyLe3SJMz2wVL9KLjEheDzrO5m"
                  }
                  alt="image"
                  width={900}
                  height={150}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8">
                <h2 className="text-2xl font-bold">Medical</h2>
                <p>
                  Explore premium medical supplies at competitive prices on our
                  platform, ensuring your practice is well-equipped and
                  efficient for superior patient care.
                </p>
                <Link
                  href={"/product?type=others"}
                  className="bg-red-600 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-gray-500 transition-all"
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
              className="flex flex-col rounded-2xl shadow-2xl overflow-hidden bg-white"
            >
              <div className="overflow-hidden md:h-[300px]">
                <Image
                  src={
                    "https://drive.google.com/uc?export=view&id=1jFwwM3xnDrwdjuqNtM2Q7S1aTPxG-br_"
                  }
                  alt="image"
                  width={900}
                  height={150}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8">
                <h2 className="text-2xl font-bold">Boilers & Burners</h2>
                <p>
                  Boilers and burners are essential for heating, providing
                  warmth and hot water in various settings. Regular maintenance
                  ensures safe, efficient operation.
                </p>
                <Link
                  href={"/product?type=burner"}
                  className="bg-red-600 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-gray-500 transition-all"
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
                delay: 0.15,
              }}
              className="flex flex-col rounded-2xl shadow-2xl overflow-hidden bg-white"
            >
              <div className="overflow-hidden md:h-[300px]">
                <Image
                  src={"/SelfService_carousel.jpg"}
                  alt="image"
                  width={900}
                  height={150}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8">
                <h2 className="text-2xl font-bold">Laundry</h2>
                <p>
                  Optimize laundry with our efficient equipment,
                  <br /> ensuring freshness and efficiency with every load.{" "}
                  <br />
                  Transform your laundry experience.
                </p>
                <Link
                  href={"/product?type=laundry"}
                  className="bg-red-600 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-gray-500 transition-all"
                >
                  See More
                </Link>
              </div>
            </m.div>
          </div>
          <div className="sm:grid sm:grid-cols-3 flex justify-center items-center gap-20 flex-col lg:flex-row">
            <m.div
              initial={{ y: 250 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.15,
              }}
              className="flex flex-col rounded-2xl shadow-2xl overflow-hidden bg-white"
            >
              <div className="overflow-hidden md:h-[300px]">
                <Image
                  src={
                    "https://drive.google.com/uc?export=view&id=1dDYo18FiA_u1jVaM506vVPfauhCr30_V"
                  }
                  alt="image"
                  width={900}
                  height={150}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8">
                <h2 className="text-2xl font-bold">Home Appliances</h2>
                <p>
                  Elevate your home living with our vast array of premium
                  appliances, simplifying daily chores and enriching your
                  lifestyle with ease and convenience.
                </p>
                <Link
                  href={"/product?type=castle"}
                  className="bg-red-600 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-gray-500 transition-all"
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
                delay: 0.15,
              }}
              className="flex flex-col rounded-2xl shadow-2xl overflow-hidden bg-white"
            >
              <div className="overflow-hidden md:h-[300px]">
                <Image
                  src={
                    "https://drive.google.com/uc?export=view&id=1kxk4MGeV0N5ouo8tKu2aAcl4JDkPtdJi"
                  }
                  alt="image"
                  width={900}
                  height={150}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8">
                <h2 className="text-2xl font-bold">Fire Extinguisher</h2>
                <p>
                  Safeguard your space with reliable fire extinguishers,
                  ensuring peace of mind and swift response in emergencies.
                  Protect what matters most.
                </p>
                <Link
                  href={"/product?type=boiler"}
                  className="bg-red-600 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-gray-500 transition-all"
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
                delay: 0.15,
              }}
              className="flex flex-col rounded-2xl shadow-2xl overflow-hidden bg-white"
            >
              <div className="overflow-hidden md:h-[300px]">
                <Image
                  src={
                    "https://drive.google.com/uc?export=view&id=15KIs10ZoW2MALDykkA5GsJR_jNeOXG0k"
                  }
                  alt="image"
                  width={900}
                  height={150}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8">
                <h2 className="text-2xl font-bold">Others</h2>
                <p>
                  Experience the convenience and aroma of freshly brewed coffee
                  with our coffee machine. Effortlessly create your favorite
                  brews at home with our user-friendly design.
                </p>
                <Link
                  href={"/product?type=coffe"}
                  className="bg-red-600 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-gray-500 transition-all"
                >
                  See More
                </Link>
              </div>
            </m.div>
          </div>
        </section>
      </LazyMotion>
    </div>
  )
}

export default AllProducts
