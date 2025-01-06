"use client"
import React, { useState } from "react"
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react"
import Link from "next/link"
import Image from "next/image"
export function DrawerPlacement() {
  const [openRight, setOpenRight] = useState(false)

  const openDrawerRight = () => setOpenRight(true)
  const closeDrawerRight = () => setOpenRight(false)

  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4 right-0 top-[10%] fixed bold-text">
        {" "}
        {/* Render this div always */}
        <Button
          onClick={openDrawerRight}
          placeholder={""}
          className="py-5 px-10 bg-black hover:bg-red-600"
        >
          Categories
        </Button>
      </div>

      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4  bg-black"
        placeholder={""}
      >
        <div className="mb-6 flex items-center justify-between">
          <div
            // variant="h5"
            color="blue-gray"
            // placeholder={""}
            className="text-white"
          >
            <Link href="/product">
              <b className="text-white text-2xl hover:text-red-600">
                {" "}
                Products
              </b>
            </Link>
          </div>
          <IconButton
            variant="text"
            color="white"
            onClick={closeDrawerRight}
            placeholder={""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div color="gray" className="mb-8 pr-4 font-normal ">
          <div className="leftside">
            <ul>
              <li>
                <Link href="/product?type=utensils">
                  <p className="text-white text-xl h-5 "> Kitchen Utensils</p>
                </Link>
              </li>
              <li>
                <Link href="/product?type=hot">
                  <p className="text-white text-xl h-5">Heating</p>
                </Link>
              </li>
              <li>
                <Link href="/product?type=cold">
                  <p className="text-white text-xl h-5"> Refrigeration</p>
                </Link>
              </li>
              <li>
                <Link href="/product?type=laundry">
                  <p className="text-white text-xl h-5">Laundry</p>
                </Link>
              </li>
              <li>
                <Link href="/product?type=others">
                  <p className="text-white text-xl h-5">Medical</p>
                </Link>
              </li>
              <li>
                <Link href="/product?type=castle">
                  {" "}
                  <p className="text-white text-xl h-5">Home Appliances</p>
                </Link>
              </li>
              <li>
                <Link href="/product?type=boiler">
                  <p className="text-white text-xl h-5"> Fire Extinguisher</p>
                </Link>
              </li>

              <li>
                <Link href="/product?type=burner">
                  <p className="text-white text-xl h-5"> Boilers & Burners</p>
                </Link>
              </li>
              {/* <li>
                <Link href="/product?type=burner">
                  <p className="text-white text-xl h-5">
                    {" "}
                    Raw Material Processing
                  </p>
                </Link>
              </li> */}
              <li>
                <Link href="/product?type=coffe">
                  <p className="text-white text-xl h-5">Others</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  )
}
