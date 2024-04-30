"use client"

import { useRouter, useSearchParams } from "next/navigation"
import Products from "../components/ProductsMachinesPage"
import useProducts, { TQuery } from "@/hooks/use-products"
import Link from "next/link"
import { Suspense } from "react"
import { DrawerPlacement } from "./drawer"
import Image from "next/image"

export const dynamic = "force-dynamic"
// ; | "" | ""
function getProductName(typeQuery: string) {
  if (typeQuery === "hot") {
    return "Heating"
  } else if (typeQuery === "cold") {
    return "Refrigeration"
  } else if (typeQuery === "kitchen") {
    return "Kitchen"
  } else if (typeQuery === "laundry") {
    return "Laundry"
  } else if (typeQuery === "others") {
    return "Medical"
  } else if (typeQuery === "castle") {
    return "Home Appliances"
  } else if (typeQuery === "boiler") {
    return "Fire Extinguisher"
  } else if (typeQuery === "burner") {
    return "Boilers & Burners"
  } else if (typeQuery === "utensils") {
    return "Kitchen Utensils"
  } else if (typeQuery === "coffe") {
    return "Others"
  } else {
    return "Products"
  }
}
const Loading = () => {
  return (
    <div className=" min-h-screen w-full z-[100] flex justify-center items-center gap-8 flex-col pt-[10%]">
      <h1 className="w-[300px] h-[80px] bg-gray-50 rounded-[20px] flashing"></h1>
      <div className="flex items-center justify-center gap-8">
        <div className="w-[390px] h-[530px] bg-gray-50 rounded-[20px] flashing"></div>
        <div className="w-[390px] h-[530px] bg-gray-50 rounded-[20px] flashing"></div>
        <div className="w-[390px] h-[530px] bg-gray-50 rounded-[20px] flashing"></div>
      </div>
    </div>
  )
}
export default function SearchByType() {
  const params = useSearchParams()
  const typeQuery = params.get("type") as TQuery
  const router = useRouter()
  const { products, isLoading } = useProducts(typeQuery)

  return (
    <div className=" flex flex-col gap-2 pt-[10px] ">
      <Image
        width={400}
        height={200}
        src="https://drive.google.com/uc?export=view&id=1eHo4jATgYA3ArSab9QW_bFXCk6FLQ2cE"
        alt="bg"
        style={{
          height: "50vh",
          objectFit: "cover",
          width: "100%",
          position: "absolute",
          zIndex: "-5",
          top: "-2%",
          right: "0",
        }}
      />
      <div className="right-0">
        <DrawerPlacement />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Products items={products} name={getProductName(typeQuery)} />
        </Suspense>
      )}
    </div>
  )
}
