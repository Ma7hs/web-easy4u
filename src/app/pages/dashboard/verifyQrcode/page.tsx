"use client";

import React, { useState } from "react";
import QRScanner from "../../../../app/components/qr/QrCodeReader";
import "react-html5-camera-photo/build/css/index.css";
import "../../../../styles/verifyQrcodeStyle.css";
import "react-html5-camera-photo/build/css/index.css";

import QrImage from "../../../../../public/static/qrcode-image.png";

const VerifyQRCodePage: React.FC = () => {
  const [showScanner, setShowScanner] = useState(false);

  const openScanner = () => {
    setShowScanner(true);
  };

  const closeScanner = () => {
    setShowScanner(false);
  };

  return (
    <div className="page-container">
      <div className="qrcode-container">
        {showScanner ? (
          <QRScanner />
          ) : (
            <>
            <h1 className="qrcode__title">Leitor de pedidos QRcode</h1>
            <img
              src={QrImage.src}
              alt="Qrcode Image"
              className="qrcode__image"
            />
            <button className="qrcode__button" onClick={openScanner}>
              Liberar acesso a câmera
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyQRCodePage;
