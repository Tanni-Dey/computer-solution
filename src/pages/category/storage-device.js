import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const StorageDeviceCategory = () => {
  return <div>StorageDeviceCategory</div>;
};

export default StorageDeviceCategory;

StorageDeviceCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
