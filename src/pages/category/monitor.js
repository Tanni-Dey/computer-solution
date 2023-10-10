import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const MonitorCategory = () => {
  return <div>monitor</div>;
};

export default MonitorCategory;

MonitorCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
