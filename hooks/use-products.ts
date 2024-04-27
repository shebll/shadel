"use client"

import { getProducts } from "@/sanity/sanity-utils"
import ProductMachineType from "@/types/Product"
import { useEffect, useState } from "react"

export type TQuery =
  | "heating"
  | "cold"
  | "kitchen"
  | "laundary"
  | "castle"
  | "boiler"
  | "others"
  | "Prouducts"
  | "burner"
  | "utensils"
  | "coffe"

export default function useProducts(typeQuery: string) {
  const [products, setProducts] = useState<ProductMachineType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await getProducts(typeQuery)
      setProducts(fetchedProducts)
      setIsLoading(false)
    }
    fetchData()
  }, [typeQuery])

  return {
    products,
    isLoading,
  }
}
