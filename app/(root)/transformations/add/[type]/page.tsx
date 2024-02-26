import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "@/constants";

const AddTransformationsTypePage = ({ params: { type } }: SearchParamProps) => {
  const transformation = transformationTypes[type];

  return (
    <Header title={transformation.title} subTitle={transformation.subTitle} />
  );
};

export default AddTransformationsTypePage;
