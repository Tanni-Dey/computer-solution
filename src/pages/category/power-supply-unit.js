import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const PowerSupplyUnitCategory = () => {
  return <div>pw</div>;
};

export default PowerSupplyUnitCategory;

PowerSupplyUnitCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
