"use client";
import { useEffect, useState } from "react";
import { getAllEligiblePromotions, generateDiscountCode } from "../../utils";
import Nabvar from "@/components/Navbar";

export default function Promotions() {
  const [shopName, setShopName] = useState("");
  const [shopApi, setShopApi] = useState("");
  const [code, setCode] = useState("xxxxx");

  const handleCodeGeneration = async (shopifyToken, shopifyStore) => {
    const res = await generateDiscountCode(20, "ll", shopApi, shopName);
    setCode(res.code);
  };
  useEffect(() => {
    (async () => {
      const res = await getAllEligiblePromotions();
      const resArr = res[0].split(",");
      setShopName(resArr[0]);
      setShopApi(resArr[1]);
      console.log(resArr);
    })();
  }, []);

  return (
    <div>
      {code}
      <button onClick={handleCodeGeneration}>generate code </button>
    </div>
  );
}
