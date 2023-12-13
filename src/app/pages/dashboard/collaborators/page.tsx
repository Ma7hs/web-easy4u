"use client"

import React, { useState } from "react";

import DashboardPage from "../page";

import CollaboratorsTable from "@/app/components/CollaboratorsTable";

import styles from "../../../../styles/collaboratorsStyle.module.css"; // Importa os estilos do módulo CSS

import ModalCollaborator from "@/app/components/ModalCollaborator";

interface UsersProps {
  id: number | undefined,
  name: string,
  email: string,
  userType: string
  password: string | null
}

const Collaborators: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean | null>(false);
  const [users, setUsers] = useState<UsersProps | undefined>()

  const handleClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <section id={styles["collaborators"]}>
      <button
        className={styles["collaborators__button"]}
        onClick={handleClick}
      >
        Cadastrar Colaborador
      </button>
      <div className={styles["collaborators__table-wrapper"]}>
        <CollaboratorsTable
          id={0}
          name=''
          email={""}
          userType={""}
          password={null}
        />

      </div>
      {showModal && (
        <ModalCollaborator
          openModal={true}
          title="Cadastrar novo"
          name=""
          email=""
          password={''}
          userType=""
          onClose={handleModalClose}
        />
      )}
    </section>
  );
};

export default Collaborators;
