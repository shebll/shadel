"use client"

import { getMachines } from "@/sanity/sanity-utils"
import ProductMachineType from "@/types/Product"
import { useEffect, useState } from "react"

export type TQuery = "laser" | "brake" | "rolling" | "press" | "shear" | "bind"

export default function useMachines(typeQuery: string) {
  const [machine, setMachine] = useState<ProductMachineType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const fetchedMachines = await getMachines(typeQuery)
      setMachine(fetchedMachines)
      setIsLoading(false)
    }
    fetchData()
  }, [typeQuery])

  return {
    machine,
    isLoading,
  }
}
