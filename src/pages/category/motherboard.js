import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const MotherboardCategory = () => {
  return <div>motherboard</div>;
};

export default MotherboardCategory;

MotherboardCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
