// ModalSendCredits.tsx
import React, { FC, useState } from "react";
import styles from "../../styles/components/modalSendCreditsStyle.module.css";
import CloseIcon from "../../../public/static/close-icon.png";
import CurrencyInput from "react-currency-input-field";

import { performApi } from "@/app/utils/api";
import TOKEN from "@/app/utils/token";

interface ModalSendCreditsProps {
  openModal: boolean;
  onClose: () => void;
}

const ModalSendCredits: FC<ModalSendCreditsProps> = (props) => {
  const { openModal, onClose } = props;

  const [emailValue, setEmailValue] = useState("");
  const [creditValue, setCreditValue] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handleCreditChange = (value: string | undefined) => {
    setCreditValue(value || "");
  };

  const closePopup = () => {
    onClose();
  };

  if (!openModal) {
    return null;
  }

  const addCredit = async () => {
    try {
      const creditData = {
        email: emailValue,
        value: Number(creditValue.replace(/[^0-9.,]/g, "").replace(",", ".")),
      };

      console.log(creditData);

      await performApi.sendDataToken(
        `users/balance/DEPOSIT`,
        "POST",
        TOKEN,
        creditData
      );
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    } finally {
      closePopup();
    }
  };

  return (
    <div>
      <div className={styles["popup-container"]}>
        <img
          className={styles["popup__close"]}
          src={CloseIcon.src}
          onClick={closePopup}
        />
        <span className={styles["popup__title"]}>
          Adicionar créditos para usuários
        </span>
        <div className={styles["actions"]}>
          <div className={styles["action"]}>
            <label className={`${styles["popup__text"]} ${styles["label"]}`}>
              Email do colaborador
            </label>
            <input
              placeholder={`Email do colaborador`}
              className={`${styles["action__input"]} ${styles["input"]}`}
              value={emailValue}
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles["action"]}>
            <label className={`${styles["popup__text"]} ${styles["label"]}`}>
              Quanto deseja enviar?
            </label>
            <CurrencyInput
              className={`${styles["action__input"]} ${styles["price__input"]}  ${styles["input"]}`}
              name="input-name"
              placeholder="Preço do produto"
              defaultValue={creditValue
                .replace(/[^0-9.,]/g, "")
                .replace(",", ".")}
              onValueChange={(value) => handleCreditChange(value)}
              intlConfig={{ locale: "pt-BR", currency: "BRL" }}
            />
          </div>
        </div>
        <div className={styles["popup-action-container"]}>
          <div className={styles["popup-buttons"]}>
            <button className={styles["button__cancel"]} onClick={closePopup}>
              Cancelar
            </button>
            <button className={styles["button__confirm"]} onClick={addCredit}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
      <div className={styles["popup-background"]} onClick={closePopup}></div>
    </div>
  );
};

export default ModalSendCredits;
