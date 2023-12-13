// ModalDelete.tsx
import React, { useState } from "react";
import DoubtIcon from "../../../public/static/doubt-icon.png";
import CloseIcon from "../../../public/static/close-icon.png";

import styles from "../../styles/components/modalDeleteStyle.module.css";

interface ModalDeleteProps {
  openModal: boolean;
  confirm: () => void;
  type: string;
  onClose: () => void;
}

const ModalDelete: React.FC<ModalDeleteProps> = (props) => {
  const { openModal, confirm, type, onClose } = props;

  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  let titleText = "";
  let descriptionText = "";

  if (type === "product") {
    titleText = "Tem certeza que deseja excluir este produto?";
    descriptionText =
      "Você está excluindo o produto, e ele não estará mais disponível no sistema.";
  } else {
    titleText = "Tem certeza que deseja excluir este colaborador?";
    descriptionText =
      "Você está excluindo o colaborador, e ele não vai ter acesso ao sistema.";
  }

  return (
    <div>
      <div className={styles["popup-container"]}>
        <img
          className={styles["popup__close"]}
          src={CloseIcon.src}
          onClick={closePopup}
        />
        <div className={styles["popup-icon-container"]}>
          <img
            src={DoubtIcon.src}
            alt="Pop Up Icon"
            className={styles["popup__icon"]}
          />
        </div>
        <span className={styles["popup__title"]}>{titleText}</span>
        <p className={styles["popup__text"]}>{descriptionText}</p>
        <div className={styles["popup-buttons"]}>
          <button className={styles["button__cancel"]} onClick={closePopup}>
            Cancelar
          </button>
          <button className={styles["button__confirm"]} onClick={confirm}>
            Confirmar
          </button>
        </div>
      </div>
      <div className={styles["popup-background"]} onClick={closePopup}></div>
    </div>
  );
};

export default ModalDelete;
