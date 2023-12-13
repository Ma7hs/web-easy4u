import Logo from "../../../../public/static/logo.png";
import HomeIcon from "../../../../public/static/home-icon.png";
import ProductsIcon from "../../../../public/static/products-icon.png";
import CollaboratorIcon from "../../../../public/static/collaborator-icon.png";
import OrdersIcon from "../../../../public/static/orders-icon.png";
import HistoryIcon from "../../../../public/static/history-icon.png";
import QrcodeIcon from "../../../../public/static/qrcode-icon.png";
import LogOutIcon from "../../../../public/static/logout-icon.png";

import "../../../styles/components/sidebarStyle.css";

import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar">
      <img src={Logo.src} alt="Easy Logo" className="sidebar-logo" />
      <ul className="navigations">
        <li className="navigation">
          <Link href="/pages/dashboard/home" className="navigation__link">
            <img src={HomeIcon.src} alt="Dashboard Icon" className="link__icon" />
            <span className="link__text">Menu </span>
          </Link>
        </li>
        <li className="navigation">
          <Link href="/pages/dashboard/products" className="navigation__link">
            <img src={ProductsIcon.src} alt="Dashboard Icon" className="link__icon" />
            <span className="link__text">Produtos</span>
          </Link>
        </li>
        <li className="navigation">
          <Link href="/pages/dashboard/collaborators" className="navigation__link">
            <img src={CollaboratorIcon.src} alt="Dashboard Icon" className="link__icon" />
            <span className="link__text">Colaborador</span>
          </Link>
        </li>
        <li className="navigation">
          <Link href="/pages/dashboard/orders" className="navigation__link">
            <img src={OrdersIcon.src} alt="Dashboard Icon" className="link__icon" />
            <span className="link__text">Pedidos</span>
          </Link>
        </li>
        <li className="navigation">
          <Link href="/pages/dashboard/ordersTime" className="navigation__link">
            <img src={HistoryIcon.src} alt="Dashboard Icon" className="link__icon" />
            <span className="link__text">Pedidos/tempo</span>
          </Link>
        </li>
        <li className="navigation">
          <Link href="/pages/dashboard/history" className="navigation__link">
            <img src={HistoryIcon.src} alt="Dashboard Icon" className="link__icon" />
            <span className="link__text">Pedidos/tempo</span>
          </Link>
        </li>
        <li className="navigation">
          <Link href="/pages/dashboard/verifyQrcode" className="navigation__link">
            <img src={QrcodeIcon.src} alt="Dashboard Icon" className="link__icon" />
            <span className="link__text">Verificar QRCode</span>
          </Link>
        </li>
      </ul>
      <div className="navigation">
        <Link href="/" className="navigation__link">
          <img src={LogOutIcon.src} alt="Dashboard Icon" className="link__icon" />
          <span className="link__text">Sair</span>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;