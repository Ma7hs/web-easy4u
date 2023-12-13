import React, { useState, useEffect } from 'react';
import QrReader from 'react-qr-scanner';

import '../../../styles/qrCodeStyle.css'
const QRScanner: React.FC = () => {
  const [result, setResult] = useState<{ text: string } | null>(null);
  const [isActive, setIsActive] = useState(true);

  const handleScan = (data: { text: string } | null) => {
    if (data) {
      setResult(data);
      console.log('QR Code Result:', data);
    } else {
      console.log('Nenhum QR encontrado ou componente inativo');
    }
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  useEffect(() => {
    // Cleanup function to unsubscribe when the component is unmounted
    return () => {
      setIsActive(false);
    };
  }, []);

  return (
    <div>
      <QrReader
      id="qrcode"
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {result && <p>QR Code Result: {result.text}</p>}
    </div>
  );
};

export default QRScanner;
