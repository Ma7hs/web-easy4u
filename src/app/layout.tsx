"use client";
import Logo from "../../public/favicon/favicon.ico";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/index";

import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
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
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
