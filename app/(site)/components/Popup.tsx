"use client"
import { getProduct } from "@/sanity/sanity-utils"
import ProductMachineType from "@/types/Product"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import React, { SetStateAction, useEffect, useState } from "react"

type props = {
  productId: string
  setToggle: React.Dispatch<SetStateAction<boolean>>
  toggle: boolean
  setPopupItem: React.Dispatch<SetStateAction<string>>
}
export function Popup({ productId, toggle, setToggle, setPopupItem }: props) {
  const [product, setProduct] = useState<ProductMachineType | undefined>()

  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await getProduct(productId)
      setProduct(fetchedProducts)
    }
    fetchData()
  }, [productId])
  return (
    <div
      className={` ${
        toggle ? "fixed" : "hidden"
      } inset-0 backdrop-blur-md flex  justify-center items-center regular-text`}
    >
      <div className="z-[5]  ">
        <div
          key={product?._id}
          className="bg-white rounded-3xl overflow-hidden flex flex-col gap-10 justify-between shadow-2xl "
          style={{
            width: "fit-content",
            maxWidth: "calc(100%  )", // Adjust padding
            height: "fit-content",
            maxHeight: "calc(80vh)", // Adjust padding
            padding: "10px",
            margin: "20px", // 10% padding
          }} // Adjust width and height as needed
        >
          <Image
            src={"/close.png"}
            width={36}
            height={36}
            alt="menu"
            className=" cursor-pointer absolute   z-10"
            onClick={() => {
              setPopupItem("")
              setToggle(false)
            }}
          />
          <div className="flex justify-center items-center max-h-[350px] overflow-hidden mx-auto pt-5">
            {product?.mainImage ? (
              <Image
                src={product?.mainImage}
                alt="image"
                width={200}
                height={300}
                className=" object-contain h-fit"
              />
            ) : (
              <></>
            )}
          </div>

          <div className="flex flex-col gap-6 px-5 pb-10 justify-between">
            <div>
              <div className="font-bold text-lg md:text-2xl ">
                {product?.name}
              </div>
              <PortableText value={product?.content!} />
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          setPopupItem("")
          setToggle(false)
        }}
        className=" absolute top-0 left-0  w-screen h-screen bg-gray-400/50 z-[1] cursor-pointer"
      ></div>
    </div>
  )
}
