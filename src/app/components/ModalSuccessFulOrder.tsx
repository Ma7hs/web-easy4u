// ModalSuccessfulSendCredits.tsx
import React, { FC } from "react";
import styles from "../../styles/components/modalSuccessfulOrderStyle.module.css";
import OkIcon from "../../../public/static/ok-icon.png";
import CloseIcon from "../../../public/static/close-icon.png";

interface ModalSuccessfulSendCreditsProps {
  openModal: boolean;
  id: number;
  onClose: () => void;
}

const ModalSuccessfulSendCredits: FC<ModalSuccessfulSendCreditsProps> = (
  props
) => {
  const { openModal, id, onClose } = props;

  const closePopup = () => {
    onClose();
  };

  if (!openModal) {
    return null;
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
            src={OkIcon.src}
            alt="Pop Up Icon"
            className={styles["popup__icon"]}
          />
        </div>
        <div className={styles["popup__texts"]}>
          <span className={styles["popup__title"]}>Pedido aceito</span>
          <p className={styles["popup__text"]}>
            Pedido aceito com sucesso. Agora só resta prepará-lo.
          </p>
        </div>
      </div>
      <div className={styles["popup-background"]} onClick={closePopup}></div>
    </div>
  );
};

export default ModalSuccessfulSendCredits;
