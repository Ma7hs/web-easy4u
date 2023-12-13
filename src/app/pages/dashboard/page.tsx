// index.tsx
import React, { ReactNode } from "react";

interface DashboardPageProps {
  children: ReactNode;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ children }) => {
  return (
    <div id="dashboard">
      <div className="content">{children}</div>
    </div>
  );
};

export default DashboardPage;
