import React, { Suspense } from "react"
import SearchByType from "./SearchByType"
import Script from "next/script"
const Loading = () => {
  return (
    <div className=" min-h-screen w-full z-[10] flex justify-center items-center gap-8 flex-col ">
      <h1 className="w-[300px] h-[80px] bg-gray-50 rounded-[20px] flashing"></h1>
      <div className="flex items-center justify-center gap-8">
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
      <Suspense fallback={<Loading />}>
        <SearchByType />
      </Suspense>
    </div>
  )
}
