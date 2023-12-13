"use client";

import { FC, ReactNode, useState } from "react";
import Link from "next/link";

import "../../../../styles/homeStyle.css";
import HomeCreditButtonImage from "../../../../../public/static/home-credit-image.png";
import FilterIcon from "../../../../../public/static/filter-icon.png";
import Sofia from "../../../../../public/static/sofia.png";

import HomeProductBreadImage from "../../../../../public/static/home-product-image.png";
import HomeProductVegetablesImage from "../../../../../public/static/home-product-vegetables.png";
import HomeProductFruitsImage from "../../../../../public/static/home-product-fruits.png";
import HomeProductDessetImage from "../../../../../public/static/home-product-desset.png";

import ModalSendCredits from "@/app/components/ModalSendCredits";

import formatPrice from "@/app/utils/format-price";
export default function Home() {
  const [showModalSendCredits, setShowModalSendCredits] = useState(false);

  const handleModalClose = () => {
    setShowModalSendCredits(false);
  };

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

  const total = orders.reduce(
    (total, order) => total + order.total,
    0
  );

  console.log(total);

  return (
    <section className="home">
      <div className="home__credit-container">
        <div className="credit__texts">
          <div className="texts-introduction">
            <span className="credit__title">Crédito</span>
            <span className="credit__subtitle">
              Adicione crédito aos seus usuários
            </span>
          </div>
        </div>
        <button
          className="credit__button"
          onClick={() => {
            setShowModalSendCredits(true);
          }}
        >
          <img
            src={HomeCreditButtonImage.src}
            alt="Button Credit Image"
            className="credit-button__image"
          />
          <span className="credit-button__text">Créditos da Cantina</span>
        </button>
      </div>
      <div className="home__products-container">
        <div className="products__texts">
          <div className="texts-introduction">
            <span className="products__title">Produtos</span>
            <span className="products__subtitle">
              Adicione os produtos disponíveis
            </span>
          </div>
          <Link href="/pages/dashboard/history">
            <span className="products__verify">Verificar</span>
          </Link>
        </div>
        <ul className="products__cards">
          <li className="card">
            <img
              src={HomeProductBreadImage.src}
              alt="Card Image"
              className="card__image"
            />
            <span className="card__name">Bread</span>
          </li>
          <li className="card">
            <img
              src={HomeProductVegetablesImage.src}
              alt="Card Image"
              className="card__image"
            />
            <span className="card__name">Vegetables</span>
          </li>
          <li className="card">
            <img
              src={HomeProductFruitsImage.src}
              alt="Card Image"
              className="card__image"
            />
            <span className="card__name">Fruits</span>
          </li>
          <li className="card">
            <img
              src={HomeProductDessetImage.src}
              alt="Card Image"
              className="card__image"
            />
            <span className="card__name">Dessert</span>
          </li>
        </ul>
      </div>
      <div className="home__orders-container">
        <div className="orders__texts">
          <div className="orders__title">Pedidos</div>
          <Link
            href="/pages/dashboard/history"
            className="orders__title-container"
          >
            <span className="title__title">Todos</span>
            <button className="title__filter">
              <img
                src={FilterIcon.src}
                alt="Filter Icon"
                className="filter__icon"
              />
            </button>
          </Link>
        </div>
        <div className="orders__statistics">
          <span className="statistic__amount">
            {formatPrice(total)}
          </span>
          <span className="statistc__day">Hoje</span>
        </div>
        <ul className="orders__orders">
          {orders.map((order) => (
            <li key={order.id}>
              <Link href="/pages/dashboard/history" className="order-home">
                <img
                  src={Sofia.src}
                  alt="Order Image"
                  className="order__image"
                />
                <span className="order-home__title">{order.customerEmail}</span>
                <span className="order__number">Pedido número #{order.id}</span>
                <span className="order__price">{formatPrice(order.total)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {showModalSendCredits && (
        <ModalSendCredits
          openModal={true}
          onClose={handleModalClose}
        ></ModalSendCredits>
      )}
    </section>
  );
}
