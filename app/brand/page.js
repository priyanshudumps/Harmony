"use client";
import { isBrand } from "@/utils";
import BrandNav from "../../components/BrandNav";
import { useEffect } from "react";

export default function Brand() {
  useEffect(() => {
    const checkBrandValidity = async () => {
      const result = await isBrand();
      console.log("is brand ?", result);
    };
    
    checkBrandValidity();
  }, []);

  return (
    <div>
      <BrandNav />
    </div>
  );
}