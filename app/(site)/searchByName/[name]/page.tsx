import { getByName } from "@/sanity/sanity-utils"
import React from "react"
import Products from "../../components/ProductsMachinesPage"
import Image from "next/image"
type props = {
  params: { name: string }
}
async function page({ params }: props) {
  const name = decodeURIComponent(params.name)
  console.log(name)
  const products = await getByName(name)
  console.log("products", products)

  return (
    <div style={{ paddingTop: "50px" }}>
      <Image
        width={400}
        height={200}
        src="/bg/8.png"
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
      <Products items={products} name="products" />
    </div>
  )
}

export default page
