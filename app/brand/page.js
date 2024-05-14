"use client";
import { checkIsBrand, registerAsBrand } from "@/utils";
import BrandNav from "../../components/BrandNav";
import { useEffect } from "react";

export default function Brand() {
  useEffect(() => {
    const checkBrandValidity = async () => {
      const result = await checkIsBrand();
      console.log("is brand ?", result);
    };

    checkBrandValidity();
  }, []);

  return (
    <div>
      <BrandNav />
      <button
        onClick={async () => {
          const res = await registerAsBrand();
          console.log(res);
        }}
      >
        Join Harmony
      </button>
    </div>
  );
}
