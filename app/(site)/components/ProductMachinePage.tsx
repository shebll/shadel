import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Images from "./Images";
import ProductMachineType from "@/types/Product";

type props = {
  product: ProductMachineType;
};

function ProductMachinePage({ product }: props) {
  return (
    <div className="container  mx-auto py-20 px-[10px] flex justify-between flex-col gap-20 pt-[200px]">
      {/* <img
        src="/bg/8.png"
        alt="bg"
        style={{
          height: "50vh",
          objectFit: "cover",
          width: "100%",
          position: "absolute",
          zIndex: "-1",
          top: "3%",
          right: "0",
        }}
      /> */}
      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
        <div className="flex gap-6 flex-col pt-[15%]">
          <h1 className="text-4xl font-bold text-white">{product?.name}</h1>
          <p className="text-lg text-white text-gray-600">
            {product?.description}
          </p>
        </div>
        <Image
          src={product?.mainImage}
          alt="image"
          width={700}
          height={500}
          className="bg-white shadow-2xl rounded-2xl "
        />
      </div>
      {product?.url && (
        <div className="flex flex-col gap-4">
          <Link
            href={product?.url || "/"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 text-white px-3 py-2 text-center rounded-[30px] flex-1 text-lg font-semibold"
          >
            youtube video
          </Link>
          <hr />
        </div>
      )}
      <div className="flex justify-between items-start gap-10 flex-col lg:flex-row max-w-[120%]">
        <div className="max-w-full sm:max-w-[50%]">
          <div className="flex flex-col gap-4 ">
            {product?.content && (
              <>
                <h1 className="text-3xl font-bold uppercase md:text-5xl ">
                  Specifications
                </h1>
                <hr />
                <div className="flex flex-col gap-6 py-4 text-lg">
                  <PortableText value={product?.content} />
                </div>
              </>
            )}
          </div>
          <div className="flex flex-col gap-4">
            {product?.features && (
              <>
                <h1 className="text-3xl font-bold uppercase md:text-5xl ">
                  features
                </h1>
                <hr />
                <div className="flex flex-col gap-6 py-4 text-lg ">
                  <PortableText value={product.features} />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="w-full xvw">
          {product?.table && (
            <Image
              src={product.table}
              alt="image"
              className="object-cover w-full h-full rounded-lg"
              width={1500}
              height={800}
            />
          )}
          <Images product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductMachinePage;
