import React from "react";
import Header from "@/components/header/Header";

function layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default layout;
