"use client";
import { checkIsBrand, registerAsBrand } from "@/utils";
import BrandNav from "../../components/BrandNav";
import { useEffect, useState } from "react";

export default function Brand() {
  const [hasJoined, setHasJoined] = useState(false);
  useEffect(() => {
    const checkBrandValidity = async () => {
      const result = await checkIsBrand();
      if (result) {
        setHasJoined(true);
      }
      console.log("is brand ?", result);
    };

    checkBrandValidity();
  }, [hasJoined]);

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
