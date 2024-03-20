import React from "react";

import LayoutHeader from "@/layouts/components/Header";
import LayoutMenu from "@/layouts/components/Menu";
import LayoutTabs from "@/layouts/components/Tabs";
import LayoutMain from "@/layouts/components/Main";
import LayoutFooter from "@/layouts/components/Footer";

const LayoutVertical: React.FC = () => {
  return (
    <div>
      垂直布局
      <LayoutHeader />
      <LayoutMenu />
      <LayoutTabs />
      <LayoutMain />
      <LayoutFooter />
    </div>
  );
};

export default LayoutVertical;
