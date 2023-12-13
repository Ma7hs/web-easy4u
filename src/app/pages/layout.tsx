"use client";

import Logo from "../../../public/favicon/favicon.ico";
import React, { useEffect } from "react";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../store/index";

import Sidebar from "../components/Sidebar/Sidebar";

import "../../../src/app/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const RootLayout = ({ children, showSidebar = true }: RootLayoutProps) => {
  const [renderContent, setRenderContent] = useState(false);

  useEffect(() => {
    setRenderContent(true);
  }, [showSidebar]);

  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Easy4U</title>
        <meta name="description" content="Easy4U Website" />
        <link rel="icon" type="image/x-icon" href={Logo.src} />
      </head>
      <body>
        {renderContent && showSidebar && <Sidebar />}
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
