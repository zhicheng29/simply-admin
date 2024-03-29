import React from "react";

import LayoutHeader from "@/layouts/components/Header/index.tsx";
import LayoutMenu from "@/layouts/components/Menu/index.tsx";
import LayoutTabs from "@/layouts/components/Tabs/index.tsx";
import LayoutMain from "@/layouts/components/Main/index.tsx";
import LayoutFooter from "@/layouts/components/Footer/index.tsx";

const LayoutHorizontal: React.FC = () => {
  return (
    <div>
      横布局
      <LayoutHeader />
      <LayoutMenu />
      <LayoutTabs />
      <LayoutMain />
      <LayoutFooter />
    </div>
  );
};

export default LayoutHorizontal;
