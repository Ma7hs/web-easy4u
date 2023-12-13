"use client";

import React, { useEffect, useState } from "react";
import ProductsTable from "@/app/components/ProductsTable";
import "@/styles/productsStyle.css";
import { performApi } from "@/app/utils/api";
import TOKEN from "@/app/utils/token";

import ModalProduct from "../../../components/ModalProduct";

const Products: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  const getProducts = async () => {
    try {
      const fetchedProducts = await performApi.getData("products", TOKEN);
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [showModal, setShowModal] = useState<boolean | null>(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <section id="products">
      <button className="products__button" onClick={handleClick}>
        Cadastrar produto
      </button>
      <div className="products__table-wrapper">
        <ProductsTable products={products}></ProductsTable>
      </div>
      {showModal && (
        <ModalProduct
          openModal={true}
          title="Adicionar Produto"
          photo=""
          name=""
          description=""
          type=""
          price=""
          availability={false}
          onClose={handleModalClose}
        />
      )}
    </section>
  );
};

export default Products;
