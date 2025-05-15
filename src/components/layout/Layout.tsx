import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-[url(/frame.png)] w-full h-[2048px] bg-cover bg-center">
      {children}
    </div>
  );
}

export default Layout;
