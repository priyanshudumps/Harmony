"use client";
import { useEffect, useState } from "react";
import { getAllEligiblePromotions, generateDiscountCode } from "../../utils";

export default function Promotions() {
  const [shopName, setShopName] = useState("");
  const [shopApi, setShopApi] = useState("");
  useEffect(() => {
    (async () => {
      const res = await getAllEligiblePromotions();
      console.log(res);
    })();
  }, []);

  return <div></div>;
}
