import React, { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import EditIcon from "../../../public/static/edit-icon.png";
import DeleteIcon from "../../../public/static/delete-icon.png";

import "../../styles/components/productsTableStyle.css";

import formatPrice from "../utils/format-price";

import ModalProduct from "../components/ModalProduct";
import ModalDelete from "../components/ModalDelete";

import { performApi } from "@/app/utils/api";
import TOKEN from "@/app/utils/token";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
  productType: string;
  preparationTime: number | null;
  disponibility: boolean;
}

interface ProductsTableProps {
  products: Product[];
}

export default function ProductsTable({ products }: ProductsTableProps) {
  const flattenedRows = products.flat();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [action, setAction] = useState<string | null>("");

  const handleClick = (product: Product, action: string) => {
    setSelectedProduct(product);
    setAction(action);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
    setAction("");
  };

  const deleteProduct = async () => {
    try {
      await performApi.deleteData(`products/${selectedProduct!.id}`, TOKEN);
    } catch (error) {
      console.error("Erro ao deletar dados:", error);
    }
  };

  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table__title">Foto</TableCell>
            <TableCell className="table__title">Nome</TableCell>
            <TableCell className="table__title">Tipo</TableCell>
            <TableCell className="table__title">Preço</TableCell>
            <TableCell className="table__title">Disponibilidade</TableCell>
            <TableCell className="table__title">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flattenedRows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="table__item table__item-image">
                <img className="item__image" src={row.photo} alt={row.name} />
              </TableCell>
              <TableCell className="table__item">{row.name}</TableCell>
              <TableCell className="table__item">{row.productType}</TableCell>
              <TableCell className="table__item">
                {formatPrice(row.price)}
              </TableCell>
              <TableCell className="table__item">
                {row.disponibility ? "Sim" : "Não"}
              </TableCell>
              <TableCell className="table__item">
                <div className="table__item-actions">
                  <img
                    src={EditIcon.src}
                    alt="Edit Icon"
                    onClick={() => handleClick(row, "edit")}
                  />
                  <img
                    src={DeleteIcon.src}
                    alt="Delete Icon"
                    onClick={() => handleClick(row, "delete")}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedProduct && action == "edit" && (
        <ModalProduct
          openModal={true}
          title="Editar Produto"
          id={selectedProduct.id}
          photo={selectedProduct.photo}
          name={selectedProduct.name}
          description={selectedProduct.description}
          type={selectedProduct.productType}
          price={formatPrice(selectedProduct.price)}
          availability={selectedProduct.disponibility}
          onClose={handleModalClose}
        />
      )}
      {selectedProduct && action == "delete" && (
        <ModalDelete
          openModal={true}
          type="product"
          onClose={handleModalClose}
          confirm={() => {
            deleteProduct();
            location.reload();
          }}
        ></ModalDelete>
      )}
    </TableContainer>
  );
}
