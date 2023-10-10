import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const RamCategory = () => {
  return <div>ram</div>;
};

export default RamCategory;

RamCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
