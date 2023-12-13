"use client";

import { useState } from "react";

import Logo from "../../../public/static/logo.png";

import BannerImage from "../../../public/static/banner-redefine-password.png";

import "../../styles/redefinePasswordPartOneStyle.css";

export default function RedefinePasswordPartOne() {
  const [emailValue, setEmailValue] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  return (
    <div>
      <main>
        <section className="redefine-password">
          <div className="redefine-password-action">
            <div className="redefine-password-container">
              <img
                src={Logo.src}
                className="redefine-password__image"
                alt="Easy 4 You Logo"
              />
              <span className="subtitle">Esqueceu sua senha?</span>
              <h1 className="title">Redefinir senha</h1>
              <form className="redefine-password__form" action="POST">
                <div className="form__email-container">
                  <label htmlFor="email" className="email__label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="email__input"
                    value={emailValue}
                    onChange={handleEmailChange}
                  />
                </div>
                <button
                  type="button"
                  className="redefine-password__button"
                  onClick={() => {
                    console.log(emailValue);
                  }}
                >
                  CONTINUAR
                </button>
              </form>
            </div>
          </div>
          <div className="banner">
            <img
              src={BannerImage.src}
              alt="Banner Image"
              className="banner__image"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
