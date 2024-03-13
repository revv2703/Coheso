import Navigation from "@/components/site/navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-full">
        <Navigation />
        {children}
    </main>
  )
};

export default layout;
