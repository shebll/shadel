import React from "react"
import { getMachines } from "@/sanity/sanity-utils"
import Products from "../components/ProductsMachinesPage"
import Image from "next/image"
export const dynamic = "force-dynamic"
async function page() {
  const products = await getMachines()
  return (
    <div>
      <Image
        width={1080}
        height={546}
        src="https://drive.google.com/uc?export=view&id=1iyxzKQmayyP6gcocVJAwhDbhCCOULEge"
        alt="bg"
        style={{
          height: "50vh",
          objectFit: "cover",
          width: "100%",
          position: "absolute",
          zIndex: "-1",
          top: "-2%",
          right: "0",
        }}
      />
      <Products items={products} name="Machines" />
    </div>
  )
}

export default page
