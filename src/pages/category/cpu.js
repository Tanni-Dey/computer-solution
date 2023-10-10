import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const CpuCategory = () => {
  return <div>category</div>;
};

export default CpuCategory;

CpuCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
