import React, { FC, useState, useEffect } from "react";
import styles from "../../styles/components/modalRefundStyle.module.css";
import CloseIcon from "../../../public/static/close-icon.png";
import { motion, AnimatePresence } from "framer-motion";

import CustomizedCheckbox from "../components/CustomizedCheckbox";

interface ModalRefundProps {
  openModal: boolean;
  foods: string[];
  onCheckboxChange: (checkedItems: { [key: string]: boolean }) => void;
  onClose: () => void;
}

const ModalRefund: FC<ModalRefundProps> = (props) => {
  const { openModal, foods, onCheckboxChange, onClose } = props;

  const closePopup = () => {
    onClose();
  };

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (newCheckedItems: { [key: string]: boolean }) => {
    setCheckedItems(newCheckedItems);
    onCheckboxChange(newCheckedItems);
  };

  useEffect(() => {
    if (openModal) {
      // Reset checkedItems when the modal opens
      setCheckedItems({});
    }
  }, [openModal]);

  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          key="modal"
          className={styles["popup-container"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <img
            key="close-icon"
            className={styles["popup__close"]}
            src={CloseIcon.src}
            onClick={closePopup}
            alt="Close"
          />
          <div key="texts" className={styles["popup__texts"]}>
            <span className={styles["popup__title"]}>Extornar pedido</span>
            <p className={styles["popup__text"]}>
              Selecione os itens do carrinho para realizar o extorno
            </p>
          </div>
          <div key="checkbox" className={styles["popup__checkbox"]}>
            <CustomizedCheckbox
              foods={foods}
              onCheckboxChange={handleCheckboxChange}
            />
          </div>
          <div key="action-container" className={styles["popup-action-container"]}>
            <div key="buttons" className={styles["popup-buttons"]}>
              <button className={styles["button__cancel"]} onClick={closePopup}>
                Cancelar
              </button>
              <button
                className={styles["button__confirm"]}
                onClick={() => {
                  console.log(checkedItems);
                  closePopup();
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </motion.div>
      )}
      {openModal && (
        <motion.div
          key="background"
          onClick={closePopup}
          className={styles["popup-background"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        />
      )}
    </AnimatePresence>
  );
};

export default ModalRefund;
