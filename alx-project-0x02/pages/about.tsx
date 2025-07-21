import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import React from "react";

const about = () => {
  return (
    <>
    <Header/>
      <h1>About Page</h1>
      <Button size="small" shape="rounded-sm"/>
      <Button size="medium" shape="rounded-md"/>
      <Button size="large" shape="rounded-full"/>
    </>
  );
};

export default about;
