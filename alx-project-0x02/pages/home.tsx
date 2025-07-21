import Card from "@/components/common/Card";
import React from "react";

const home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <Card title="Nairobi" content="The Heart of Kenya"/>
        <Card title="Thika" content="Pineapples are here "/>
        <Card title="Nyeri" content="Murima King"/>
    </div>
  );
};

export default home;
