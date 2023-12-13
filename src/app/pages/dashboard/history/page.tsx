"use client"

import "../../../../styles/historyStyle.css";

import Order from "@/app/components/Order";

import formatPrice from "@/app/utils/format-price";

import RootLayout from "@/app/layout";

const History: React.FC = () => {
  const orders = [
    {
      id: 1,
      customerEmail: "l.vinicius1577@gmail.com",
      custumerPhoto: null,
      status: "ACTIVE",
      products: [
        {
          product: {
            id: 2,
            name: "hello",
            photo:
              "https://img.freepik.com/premium-psd/matte-metallic-can-mockup-with-drops_145224-103.jpg?w=740",
            description: "Salgado frito com varias diversidades",
            price: 5.6,
            productType: "Bebidas",
          },
          qntd: 1,
          total_value: 5.6,
        },
        {
          product: {
            id: 2,
            name: "Ola2",
            photo:
              "https://img.freepik.com/premium-psd/matte-metallic-can-mockup-with-drops_145224-103.jpg?w=740",
            description: "Salgado frito com varias diversidades",
            price: 5.6,
            productType: "Bebidas",
          },
          qntd: 1,
          total_value: 5.6,
        },
        {
          product: {
            id: 2,
            name: "Ola3",
            photo:
              "https://img.freepik.com/premium-psd/matte-metallic-can-mockup-with-drops_145224-103.jpg?w=740",
            description: "Salgado frito com varias diversidades",
            price: 5.6,
            productType: "Bebidas",
          },
          qntd: 1,
          total_value: 5.6,
        },
      ],
      total: 5.6,
      preparationTime: 15,
      createdAt: "2023-12-09T17:31:53.128Z",
    },
    {
      id: 1,
      customerEmail: "l.vinicius1577@gmail.com",
      custumerPhoto: null,
      status: "ACTIVE",
      products: [
        {
          product: {
            id: 2,
            name: "hello",
            photo:
              "https://img.freepik.com/premium-psd/matte-metallic-can-mockup-with-drops_145224-103.jpg?w=740",
            description: "Salgado frito com varias diversidades",
            price: 5.6,
            productType: "Bebidas",
          },
          qntd: 1,
          total_value: 5.6,
        },
        {
          product: {
            id: 2,
            name: "Ola2",
            photo:
              "https://img.freepik.com/premium-psd/matte-metallic-can-mockup-with-drops_145224-103.jpg?w=740",
            description: "Salgado frito com varias diversidades",
            price: 5.6,
            productType: "Bebidas",
          },
          qntd: 1,
          total_value: 5.6,
        },
        {
          product: {
            id: 2,
            name: "Ola3",
            photo:
              "https://img.freepik.com/premium-psd/matte-metallic-can-mockup-with-drops_145224-103.jpg?w=740",
            description: "Salgado frito com varias diversidades",
            price: 5.6,
            productType: "Bebidas",
          },
          qntd: 1,
          total_value: 5.6,
        },
      ],
      total: 5.6,
      preparationTime: 15,
      createdAt: "2023-12-09T17:31:53.128Z",
    },
    
  ];

  return (
      <div id="history">
        <h1 className="title">Histórico de pedidos</h1>
        <ul className="orders">
          {orders.map((order) => (
            <Order
              id={order.id}
              email={order.customerEmail}
              foods={order.products.map((product) => product.product.name)}
              total={formatPrice(order.total)}
              showButtons={false}
            />
          ))}
        </ul>
      </div>
  );
};

export default History;
