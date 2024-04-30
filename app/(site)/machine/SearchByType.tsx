"use client"

import { useRouter, useSearchParams } from "next/navigation"
import Products from "../components/ProductsMachinesPage"
import useProducts, { TQuery } from "@/hooks/use-products"
import Link from "next/link"
import { Suspense } from "react"
import Image from "next/image"
import { DrawerPlacement } from "../machine/drawerx"
import useMachines from "@/hooks/use-machine"

export const dynamic = "force-dynamic"
function getProductName(typeQuery: string) {
  if (typeQuery === "laser") {
    return "Laser Machines"
  } else if (typeQuery === "brake") {
    return "Press Brake Machines   "
  } else if (typeQuery === "rolling") {
    return "Roller Machines"
  } else if (typeQuery === "shear") {
    return "Shear Machines"
  } else if (typeQuery === "bind") {
    return "Bender Machines"
  } else if (typeQuery === "press") {
    return "Punching Machines"
  } else {
    return "Machines"
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
  const router = useRouter()
  const params = useSearchParams()
  const typeQuery = params.get("type") as TQuery
  const { machine, isLoading } = useMachines(typeQuery)

  return (
    <div className=" flex flex-col gap-2 pt-[10px] ">
      <Image
        width={400}
        height={200}
        src="https://drive.google.com/uc?export=view&id=1iyxzKQmayyP6gcocVJAwhDbhCCOULEge"
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
          <Products items={machine} name={getProductName(typeQuery)} />
        </Suspense>
      )}
    </div>
  )
}
