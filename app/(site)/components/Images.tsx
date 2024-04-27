"use client";
import ProductMachineType from "@/types/Product";
import React from "react";
import Image from "next/image";
import { builder } from "@/sanity.config";

type Props = {
  product: ProductMachineType;
};
const Images: React.FC<Props> = ({ product }) => {
  return (
    <div className="grid w-full grid-cols-3 gap-2 mt-8">
      {product.secImages &&
        product.secImages.map((image, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center"
          >
            <Image
              src={builder.image(image.asset).url()}
              alt={`Product Image ${index + 1}`}
              width={200}
              height={100}
              className="object-cover h-full transition duration-300 transform rounded-lg shadow-md group-hover:scale-105"
            />
          </div>
        ))}
    </div>
  );
};

export default Images;
