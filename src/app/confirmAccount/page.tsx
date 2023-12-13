"use client";

import Logo from "../../../public/static/logo.png";

import "../../styles/confirmAccountStyle.css";

import React, { useState } from "react";

export default function ConfirmAccount() {
  return (
      <main>
        <section className="confirm-account">
          <img
            src={Logo.src}
            className="confirm-account__image"
            alt="Easy 4 You Logo"
          />
          <h1 className="title">Confirme sua conta</h1>
          <div className="confirm-account__texts">
            <p className="text">
              Você é o membro mais novo da nossa plataforma, a Easy4U e queremos
              ajudar você a otimizar seu tempo na cantina!
            </p>
            <p className="text">
              Para iniciar, basta clicar no botão abaixo para confirmar sua
              conta!
            </p>
          </div>
          <button
            className="confirm-account__button"
            onClick={() => {
              console.log("nao entendi essa tela");
            }}
          >
            CONFIRMAR EMAIL
          </button>
        </section>
      </main>
  );
}
