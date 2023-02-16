import { FC, ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}
export const DarkLayaout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "100px",
      }}
    >
      <div>{children}</div>
    </div>
  );
};
