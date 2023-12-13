// Modal.tsx
import React, { FC, useState } from "react";
import styles from "../../styles/components/modalProductStyle.module.css";
import CloseIcon from "../../../public/static/close-icon.png";

import UploadImageInput from "./UploadImageInput";
import CurrencyInput from "react-currency-input-field";

import { performApi } from "@/app/utils/api";
import TOKEN from "@/app/utils/token";

interface ModalProductProps {
  id?: number;
  openModal: boolean;
  photo: string;
  title: string;
  name: string;
  description: string;
  type: string;
  price: string;
  availability: boolean;
  onClose: () => void;
}

const ModalProduct: FC<ModalProductProps> = (props) => {
  const {
    openModal,
    photo,
    id,
    title,
    name,
    description,
    type,
    price,
    availability,
    onClose,
  } = props;

  const [uploadedImage, setUploadedImage] = useState<string>(photo);

  const handleSetImage = (imageUrl: string) => {
    setUploadedImage(imageUrl);
  };

  const [nameValue, setNameValue] = useState(name);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [typeValue, setTypeValue] = useState(type);
  const [priceValue, setPriceValue] = useState(price);
  const [isChecked, setIsChecked] = useState(availability);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescriptionValue(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeValue(event.target.value);
  };

  const handlePriceChange = (value: string | undefined) => {
    setPriceValue(value || "");
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const closePopup = () => {
    onClose();
  };

  if (!openModal) {
    return null;
  }

  const updateProduct = async () => {
    const productData = {
      name: nameValue,
      description: descriptionValue,
      price: Number(priceValue.replace(/[^0-9.,]/g, "").replace(",", ".")),
      photo: uploadedImage,
      productType: typeValue,
      disponibility: isChecked,
      preparationTime: null,
    };

    console.log(productData);
    try {
      if (title.includes("Editar")) {
        await performApi.updateData(`products/${id}`, TOKEN, productData);
      } else {
        await performApi.sendData(`products`, TOKEN, productData);
      }
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
          alt="Close"
        />
        <div className={styles["popup-action-container"]}>
          <div className={styles["action"]}>
            <label className={`${styles["popup__text"]} ${styles["label"]}`}>
              Foto
            </label>
            <UploadImageInput
              onImageChange={handleSetImage}
              defaultImage={photo}
            />
          </div>
          <div className={styles["action"]}>
            <label className={`${styles["popup__text"]} ${styles["label"]}`}>
              Nome do produto
            </label>
            <input
              placeholder={`Nome do produto`}
              className={`${styles["action__input"]} ${styles["input"]}`}
              value={nameValue}
              onChange={handleNameChange}
            />
          </div>
          <div className={styles["action"]}>
            <label className={`${styles["popup__text"]} ${styles["label"]}`}>
              Descrição do produto
            </label>
            <input
              placeholder={`Descrição do produto`}
              className={`${styles["action__input"]} ${styles["input"]}`}
              value={descriptionValue}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className={styles["actions"]}>
            <div className={styles["action"]}>
              <label className={`${styles["popup__text"]} ${styles["label"]}`}>
                Tipo do produto
              </label>
              <select
                className={styles["action__select"]}
                value={typeValue}
                onChange={handleTypeChange}
              >
                <option className={styles["option"]} value="" disabled>
                  Selecione o tipo
                </option>
                <option className={styles["option"]} value="Frito">
                  Frito
                </option>
                <option className={styles["option"]} value="Assado">
                  Assado
                </option>
                <option className={styles["option"]} value="Bebidas">
                  Bebidas
                </option>
                <option className={styles["option"]} value="Doces">
                  Doces
                </option>
                <option className={styles["option"]} value="Frutas">
                  Frutas
                </option>
                <option className={styles["option"]} value="Natural">
                  Natural
                </option>
                <option className={styles["option"]} value="PF">
                  PF
                </option>
              </select>
            </div>
            <div className={styles["action"]}>
              <label className={`${styles["popup__text"]} ${styles["label"]}`}>
                Preço do produto
              </label>
              <CurrencyInput
                className={`${styles["action__input"]} ${styles["price__input"]} ${styles["input"]}`}
                name="input-name"
                placeholder="Preço do produto"
                defaultValue={priceValue
                  .replace(/[^0-9.,]/g, "")
                  .replace(",", ".")}
                onValueChange={(value) => handlePriceChange(value)}
                intlConfig={{ locale: "pt-BR", currency: "BRL" }}
              />
            </div>
          </div>
          <div className={styles["action"]}>
            <label className={`${styles["popup__text"]} ${styles["label"]}`}>
              Disponibilidade
            </label>
            <label className={`${styles["switch"]} ${styles["label"]}`}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                className={`${styles["slider"]} ${styles["round"]} ${
                  isChecked ? styles["checked"] : ""
                }`}
              ></span>
            </label>
          </div>
          <div className={styles["popup-buttons"]}>
            <button className={styles["button__cancel"]} onClick={closePopup}>
              Cancelar
            </button>
            <button
              className={styles["button__confirm"]}
              onClick={() => {
                updateProduct();
              }}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
      <div className={styles["popup-background"]} onClick={closePopup}></div>
    </div>
  );
};

export default ModalProduct;
