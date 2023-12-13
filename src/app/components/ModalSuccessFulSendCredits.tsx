// ModalSuccessfulSendCredits.tsx
import React, { FC, useState } from "react";
import styles from "../../styles/components/modalSuccessfulSendCreditsStyle.module.css";
import OkIcon from "../../../public/static/ok-icon.png";
import CloseIcon from "../../../public/static/close-icon.png";

interface ModalSuccessfulSendCreditsProps {
  email: string;
  balance: string;
}

const ModalSuccessfulSendCredits: FC<ModalSuccessfulSendCreditsProps> = (
  props
) => {
  const { email, balance } = props;

  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
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
        <span className={styles["popup__title"]}>
          Créditos enviado com sucesso!
        </span>
        <div className={styles["popup__texts"]}>
          <p className={styles["popup__text"]}>
            Os créditos da cantina foram enviados com sucesso.
          </p>
          <p className={styles["popup__text"]}>Email: {email}</p>
          <p className={styles["popup__text"]}>Saldo: R${balance}</p>
        </div>
      </div>
      <div className={styles["popup-background"]} onClick={closePopup}></div>
    </div>
  );
};

export default ModalSuccessfulSendCredits;
