"use client";
import { useEffect } from "react";
import { getAllEligiblePromotions } from "../../utils";

export default function Promotions() {
  useEffect(() => {
    (async () => {
      const res = await getAllEligiblePromotions();
      console.log(res);
    })();
  }, []);

  return <div></div>;
}
