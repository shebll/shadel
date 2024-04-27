"use client"
import BlockContent from "@/sanity/schemas/blockContent"
import ProductMachineType from "@/types/Product"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { Popup } from "./Popup"
import { useState } from "react"

type Props = {
  items: ProductMachineType[]
  name: string
}

function Products({ items, name }: Props) {
  const [popupItme, setPopupItem] = useState("")
  const [toggle, setToggle] = useState(false)
  // const [pname, setName] = useState("Machines")

  return (
    <>
      <div className=" flex justify-start items-center flex-col min-h-[70vh]">
        <h1
          className={`text-[20px] md:text-[40px] lg:text-[80px]  font-bold text-center text-gray-300 sm:text-white pt-28`}
        >
          {name}
        </h1>

        {items.length !== 0 ? (
          <div className="text-white text-xl m-5">
            <>
              {items.length == 0
                ? "No Items founded"
                : `Items( ${items.length} ) found`}
            </>
          </div>
        ) : (
          <div className="">
            <p className="text-white text-3xl font-bold m-5 ">
              {" "}
              Ops, no items founded
            </p>
          </div>
        )}
        <div className=" container mx-auto flex flex-col lg:flex-row justify-center items-stretch gap-8 px-4  flex-wrap">
          {items?.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-3xl overflow-hidden flex flex-col gap-10 justify-between lg:w-[46%] xl:w-[30%] shadow-2xl "
            >
              <div className="flex justify-center items-center max-h-[350px] overflow-hidden mx-auto pt-20">
                {item.mainImage ? (
                  <Image
                    src={item.mainImage}
                    alt="image"
                    width={250}
                    height={350}
                    className=" bg-contain h-fit"
                  />
                ) : (
                  <></>
                )}
              </div>
              <div className="flex flex-col gap-6 px-5 pb-10 justify-between">
                <div>
                  <div
                    title={item.name}
                    className="font-bold text-lg md:text-2xl w-72 truncate "
                  >
                    {item.name}
                  </div>
                  {item.category === "" && (
                    <div className=" text-gray-500"> {item.description}</div>
                  )}
                </div>
                {item.category === "machine" ? (
                  <Link
                    href={`/${
                      item.category === "machine" ? "machine" : "product"
                    }/${item._id}`}
                    className="btn-more  "
                  >
                    See More
                  </Link>
                ) : (
                  <button
                    className="btn-more"
                    onClick={() => {
                      setPopupItem(item._id)
                      setToggle(true)
                    }}
                  >
                    See more
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Popup
        toggle={toggle}
        setPopupItem={setPopupItem}
        setToggle={setToggle}
        productId={popupItme}
      />
    </>
  )
}

export default Products
