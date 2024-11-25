import Link from "next/link"
import Image from "next/image"
import React from "react"

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-r from-white to-red-500 text-black pt-6 mt-50 px-4"
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 w-full">
        <div className="flex flex-col md:flex-row  justify-between md:items-center w-[90%] md:w-[100%] gap-10 pr-28">
          <br />
          <br />
          <div className="flex gap-4 flex-col mt-[-70px] sm:pb-10 pb-8">
            {/* <h1 className="text-2xl font-semibold"> Get In Touch</h1> */}
            <div className="flex gap-1 flex-col">
              <b className="hover:text-red-600 ">
                Egypt/ <span className="underline">+2 048 2430 020</span>
              </b>
              <b className="hover:text-red-600">
                <span className="underline ml-14"> +2 0121 244 4543</span>{" "}
              </b>
            </div>
          </div>
          <div className="flex gap-4 flex-col mt-[-40px] sm:pb-10 pb-8">
            {/* <h1 className="text-2xl font-semibold"> Get In Touch</h1> */}
            <div className="flex gap-1 flex-col">
              <b className="hover:text-red-600 ">
                KSA/ <span className="underline">+966 55 815 9711</span>
              </b>
              <b className="hover:text-red-600">
                <span className="underline ml-10"> +966 59 370 2108</span>{" "}
              </b>
              <b className="hover:text-red-600">
                <span className="underline ml-10"> +966 59 132 8480</span>
              </b>
            </div>
          </div>
          <div className="flex gap-4 flex-col mt-[-20px] sm:pb-10 pb-8">
            {/* <h1 className="text-2xl font-semibold"> Get In Touch</h1> */}
            <div className="flex gap-1 flex-col">
              <b className="hover:text-red-600 ">
                Oman/ <span className="underline">+968 9932 9189</span>
              </b>
              <b className="hover:text-red-600">
                USA /<span className="underline ml-3"> +13219483883</span>{" "}
              </b>
              <b className="hover:text-red-600">
                Swiss/ <span className="underline">+4177 549 80 75</span>
              </b>

              <b className="hover:text-red-600">
                China/<span className="underline ">+86 138 2551 3735</span>
              </b>
            </div>
          </div>
          <div className="flex gap-4 flex-col sm:pb-12 pb-0">
            {/* <h1 className="text-2xl font-semibold">Visit Us</h1> */}

            <div className="flex gap-1 flex-col">
              <div className="flex -ml-6">
                {/* <Image
                  src="/ricon.png"
                  alt="Location icon"
                  width={25}
                  height={25}
                  className="h-7 w-auto pt-1 "
                /> */}
                <div className="ml-6">
                  {" "}
                  <b className="hover:text-red-600 cursor-pointer">
                    Blocks 156:160,Industrial Zone
                    <br />
                    Sadat City - Egypt
                  </b>
                </div>
              </div>
              <div className="flex ">
                <b className="hover:text-red-600 cursor-pointer">
                  Factory 7A,Industrial Zone
                  <br /> Six Of October - Egypt
                </b>
              </div>
              <a href="mailto:info@shadel.net" className="hover:text-red-600">
                info@shadel.net
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
