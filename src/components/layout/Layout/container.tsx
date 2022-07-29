import { useState } from "react";
import { LayoutPresenter } from ".";

type Props = {
  children: React.ReactNode;
};

const drawerWidth = 240;

export const Layout: React.FC<Props> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <LayoutPresenter
      mobileOpen={mobileOpen}
      drawerWidth={drawerWidth}
      drawerContainer={container}
      handleDrawerToggle={handleDrawerToggle}
    >
      {children}
    </LayoutPresenter>
  );
};
