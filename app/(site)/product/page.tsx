import React, { Suspense } from "react"
import SearchByType from "./SearchByType"
const Loading = () => {
  return (
    <div className="relative min-h-screen w-full z-[10] flex justify-center items-center gap-8 flex-col ">
      <h1 className="w-[300px] h-[80px] bg-gray-50 rounded-[20px] flashing"></h1>
      <div className="flex justify-center items-center gap-8">
        <div className="w-[390px] h-[530px] bg-gray-50 rounded-[20px] flashing"></div>
        <div className="w-[390px] h-[530px] bg-gray-50 rounded-[20px] flashing"></div>
        <div className="w-[390px] h-[530px] bg-gray-50 rounded-[20px] flashing"></div>
      </div>
    </div>
  )
}
export default function page() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <SearchByType />
      </Suspense>
    </div>
  )
}
