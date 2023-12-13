"use client"

import { useState, ChangeEvent, FormEvent } from "react";

import Logo from "../../../public/static/logo.png";
import BannerImage from "../../../public/static/banner-redefine-password-part-two.png";

import "../../styles/redefinePasswordPartTwoStyle.css";

interface InputState {
  username: string;
  password: string;
  confirmPassword: string;
}

interface ErrorState {
  username: string;
  password: string;
  confirmPassword: string;
}

export default function RedefinePasswordPartTwo() {
  const [input, setInput] = useState<InputState>({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<ErrorState>({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("foi");

    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!error.password && !error.confirmPassword) {
      console.log("Formulário enviado com sucesso!");
    } else {
      console.log("Existem erros no formulário. Corrija-os antes de enviar.");
    }
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
              <form
                className="redefine-password__form"
                action="POST"
                onSubmit={onSubmit}
              >
                <div className="form__password-container">
                  <label htmlFor="password" className="password__label">
                    Nova senha
                  </label>
                  <input
                    className="password__input"
                    type="password"
                    name="password"
                    placeholder="Digite a senha"
                    value={input.password}
                    onChange={onInputChange}
                  ></input>
                  {error.password && (
                    <span className="err">{error.password}</span>
                  )}
                </div>
                <div className="form__password-container">
                  <label htmlFor="confirmPassword" className="password__label">
                    Confirmar senha
                  </label>
                  <input
                    className="password__input"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar senha"
                    value={input.confirmPassword}
                    onChange={onInputChange}
                  ></input>
                </div>
                {error.confirmPassword && (
                  <span className="err">{error.confirmPassword}</span>
                )}
                <button type="submit" className="redefine-password__button">
                  ENVIAR
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
