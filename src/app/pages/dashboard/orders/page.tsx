"use client";

import "../../../../styles/ordersStyle.css";

import Order from "@/app/components/Order";

import formatPrice from "@/app/utils/format-price";

const Orders: React.FC = () => {
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
            name: "Ola",
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
              "https://img.freepik.com/premium-psdmatte-metallic-can-mockup-with-drops_145224-103.jpg?w=740",
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
      id: 2,
      customerEmail: "l.vinicius1577@gmail.com",
      custumerPhoto: null,
      status: "ACTIVE",
      products: [
        {
          product: {
            id: 2,
            name: "Ola",
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
            name: "bebidaaa",
            photo:
              "https://img.freepik.com/premium-psd/matte-metallic-can-mockup-with-drops_145224-103.jpg?w=740",
            description: "Salgado frito com varias diversidades",
            price: 5.6,
            productType: "Bebidas",
          },
          qntd: 3,
          total_value: 5.6,
        },
      ],
      total: 5.6,
      preparationTime: 15,
      createdAt: "2023-12-09T17:31:53.128Z",
    },
  ];

  return (
    <div id="orders" className="orders-container">
      <h1 className="title">Pedidos</h1>
      <div style={{ flex: '2' }}>
        <ul className="orders">
          {orders.length > 0 && (
            <Order 
              key={orders[0].id}
              id={orders[0].id}
              email={orders[0].customerEmail}
              quantity={orders[0].products.map((product) => product.qntd)}
              foods={orders[0].products.map((product) => product.product.name)}
              total={formatPrice(orders[0].total)}
              showButtons={true}
              
            />
          )}
        </ul>
      </div>
      <h2 className="title">Proximos Pedidos</h2>
      <div style={{ flex: "1" }} className="next-orders">
        {orders.length > 1 && (
          <ul className="orders">
            {orders.slice(1).map((order) => (
              <Order
                key={order.id}
                id={order.id}
                quantity={order.products.map((product) => product.qntd)}
                email={order.customerEmail}
                foods={order.products.map((product) => product.product.name)}
                total={formatPrice(order.total)}
                showButtons={true}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Orders;