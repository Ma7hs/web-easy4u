// Modal.tsx
import { FC, useState } from "react";
import CloseIcon from "../../../public/static/close-icon.png";

import styles from '../../styles/components/modalCollaboratorStyle.module.module.css'
import { performApi } from "../utils/api";

interface ModalCollaboratorProps {
  openModal: boolean,
  title: string,
  name: string,
  email: string,
  password?: string,
  userType: string,
  onClose: () => void;
}

const ModalCollaborator: FC<ModalCollaboratorProps> = (props) => {
  const { openModal, title, name, email, userType, password, onClose } = props;

  const [nameValue, setNameValue] = useState(name);
  const [emailValue, setEmailValue] = useState(email);
  const [passwordValue, setPasswordValue] = useState(password);
  const [typeValue, setTypeValue] = useState(userType);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeValue(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const postCollaborator = async () => {
    const userType = localStorage.getItem('userType')
    console.log(userType);

    const data = await performApi.sendData(`auth/signup/${userType}`, 'POST', {
      name: nameValue,
      email: emailValue,
      userType: userType,
      password: passwordValue
    })

    if (data.statusCode === 201) {
      console.log("aaa" + data);
      closePopup();
    }
  }

  //   {
  //     "name": "caio",
  //     "email": "easy4u12345@gmail.com",
  //     "userType": "COLLABORATOR",
  //     "password": "12345"
  // }

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
        <span className={styles["popup__title"]}>Cadastrar Colaborador</span>
        <div className={styles["popup-action-container"]}>
          <div className={styles["action"]}>
            <label className={`${styles["popup__text"]} ${styles["label"]}`}>Nome do Colaborador</label>
            <input
              placeholder={`Nome do Colaborador`}
              className={`${styles["action__input"]} ${styles["input"]}`}
              value={nameValue}
              onChange={handleNameChange}
            />
          </div>
          <div className={styles["action"]}>
            <label className={`${styles["popup__text"]} ${styles["label"]}`}>Email do Colaborador</label>
            <input
              placeholder={`Email do Colaborador`}
              className={`${styles["action__input"]} ${styles["input"]}`}
              value={emailValue}
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles["action"]}>
            <label className={`${styles["popup__text"]} ${styles["label"]}`}>Password do Colaborador</label>
            <input
              placeholder={`Password do Colaborador`}
              className={`${styles["action__input"]} ${styles["input"]}`}
              value={passwordValue}
              type="password"
              onChange={handlePasswordChange}
            />
          </div>
          <div className={styles["action"]}>
            <label className={`${styles["popup__text"]} ${styles["label"]}`}>Tipo do colaborador</label>
            <select
              className={styles["action__select"]}
              value={typeValue}
              onChange={handleTypeChange}
            >
              <option className={styles["option"]} value="" disabled>
                Selecione o tipo
              </option>
              <option className={styles["option"]} value="COLLABORATOR">Colaborador</option>
              <option className={styles["option"]} value="ADMIN">Administrador</option>
            </select>
          </div>
          <div className={styles["popup-buttons"]}>
            <button className={styles["button__cancel"]} onClick={closePopup}>
              Cancelar
            </button>
            <button
              className={styles["button__confirm"]}
              onClick={postCollaborator}
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

export default ModalCollaborator;
