import { useState } from "react";

import "../../styles/ordersStyle.css";

import { performApi } from "@/app/utils/api";
import TOKEN from "@/app/utils/token";

import ModalRefund from "@/app/components/ModalRefund";
import ModalSuccessFullOrder from "@/app/components/ModalSuccessFulOrder";

interface Order {
  id: number;
  quantity: number[];
  email: string;
  total: string;
  showButtons: boolean;
  foods: string[];
}

const Order: React.FC<Order> = (props) => {
  const { id, quantity, email, total, foods, showButtons } = props;

  const [selectedOrder, setSelectedOrder] = useState<string[] | null>(null);
  const [action, setAction] = useState<string | null>("");
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const [isOrderConfirmed, setOrderConfirmed] = useState(false);

  const confirmOrder = async () => {
    console.log(id);

    const orderData = {
      status: "DISABLE",
    };

    console.log(orderData);
    try {
      await performApi.updateData(`carts-by-user/${id}`, TOKEN, orderData);
      setOrderConfirmed(true);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  const handleEditClick = (foods: string[], action: string) => {
    setSelectedOrder(foods);
    setAction(action);
  };

  const handleModalClose = () => {
    setSelectedOrder(null);
    setAction("");
  };

  const handleCheckboxChange = (newCheckedItems: {
    [key: string]: boolean;
  }) => {
    setCheckedItems(newCheckedItems);
  };

  return (
    <li className="order" id={id.toString()}>
      <div className="order__texts-container">
        <span className="order__title">Pedido</span>
        <span className="order__subtitle">de</span>
        <span className="order__email">{email}</span>
      </div>
      <ul className="order__foods">
        <ul className="foods__names">
          {foods.map((food, index) => (
            <li key={index} className="food__name">
              {food} - {quantity[index]}x
            </li>
          ))}
        </ul>
        <li className="food__price">
          Total: <span className="price__price">{total}</span>
        </li>
      </ul>
      {showButtons && (
        <div className="order__buttons">
          <button
            className="button__cancel"
            onClick={() => handleEditClick(foods, "edit")}
          >
            Estornar
          </button>
          <button className="button__confirm" onClick={confirmOrder}>
            Sim, confirmar
          </button>
        </div>
      )}
      {selectedOrder && action === "edit" && (
        <ModalRefund
          openModal={true}
          foods={foods}
          onClose={handleModalClose}
          onCheckboxChange={handleCheckboxChange}
        />
      )}
      {action === "confirm" && isOrderConfirmed && (
        <ModalSuccessFullOrder
          openModal={true}
          id={id}
          onClose={handleModalClose}
        />
      )}
    </li>
  );
};

export default Order;
