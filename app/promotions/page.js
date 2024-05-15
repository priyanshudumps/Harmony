"use client";
import { useEffect, useState } from "react";
import { getAllEligiblePromotions, generateDiscountCode } from "../../utils";
import Nabvar from "@/components/Navbar";

export default function Promotions() {
  const [shopName, setShopName] = useState("");
  const [shopApi, setShopApi] = useState("")
  const [secretCode , setSecretCode] = useState("xxxxx");
  useEffect(() => {
    (async () => {
      const res = await getAllEligiblePromotions();
      console.log(res);
    })();
  }, []);

  return(
    <div>
        <Nabvar />
        <span className="flex content-center justify-center my-6 text-5xl tracking-tight font-bold">Promote your Brands </span>
        <div className="flex flex-col content-center justify-center">
            <div className="w-1/3 border-2 border-gray-800 rounded-md shadow bg-gray-400 ">
            <span className="ml-5 mt-5 font-semibold text-2xl">Shop Name</span>
            <div className=" border-2 rounded-lg m-2 ml-5 text-xl w-1/2 px-3">
            hello
            </div>
            <span className="ml-5 mt-5 font-semibold text-2xl">Shop URL</span>
            <div className=" border-2 rounded-lg m-2 ml-5 text-xl w-1/2 px-3">
            hello
            </div>
            <button className="border-2 border-black ml-5 mb-3 rounded-md mt-3 py-1 px-4 bg-white font-semibold">
                {secretCode}
            </button>
            <button className="border-2 border-black ml-5 mb-3 rounded-md mt-3 px-4 py-1 bg-white hover:bg-blue-400 hover:text-black font-semibold">
                Generate code 
            </button>
            </div>
            
        </div>
    </div>
  );
}
