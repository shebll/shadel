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
        className="p-4 bg-black"
        placeholder={""}
      >
        <div className="mb-6 flex items-center justify-between">
          <div
            // variant="h5"
            color="blue-gray"
            // placeholder={""}
            className="text-white"
          >
            <Link href="/machine">
              <b className="text-white text-2xl hover:text-red-600">
                {" "}
                Machines
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
        <div color="gray" className="mb-8 pr-4 font-normal">
          <div className="leftside">
            <ul>
              <li>
                <Link href="/machine?type=brake">
                  {" "}
                  <p className="text-white text-xl">Press brake</p>
                </Link>
              </li>
              <li>
                <Link href="/machine?type=shear">
                  <p className="text-white text-xl">Shear Machines</p>
                </Link>
              </li>
              <li>
                <Link href="/machine?type=laser">
                  <p className="text-white text-xl">Laser Machines</p>
                </Link>
              </li>
              <li>
                <Link href="/machine?type=rolling">
                  <p className="text-white text-xl">Rollers Machines</p>
                </Link>
              </li>
              <li>
                <Link href="/machine?type=press">
                  <p className="text-white text-xl">Punching Machines</p>
                </Link>
              </li>{" "}
              <li>
                <Link href="/machine?type=bind">
                  <p className="text-white text-xl">Bender Machines</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  )
}
