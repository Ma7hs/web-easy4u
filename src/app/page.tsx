"use client";

import Logo from "../../public/static/logo.png";

import BannerImage from "../../public/static/banner-image.png";

import "../styles/login.css";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { performApi } from "@/app/utils/api";

interface LoginProps {
  id: number;
  name: string;
  email: string;
  userType: string;
}

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleEmailChange = (email: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = email.target.value;
    setEmail(newEmail);
    setError("");
  };

  const handlePasswordChange = (
    password: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPassword = password.target.value;
    setPassword(newPassword);
    setError("");
  };

  const handleLogin = async () => {
    try {
      const data = await performApi.sendData("auth/signin", "POST", {
        email,
        password,
      });
      if (data.statusCode === 201) {
        const token = data.message;
        localStorage.setItem("token", token)
        const typeUser = await verifyEmailsEquals(email);
        if (typeUser !== "CUSTOMER") router.push("pages/dashboard/home");
        else
          setError(
            "Você não possui as credenciais necessárias para acessar este aplicativo"
          );
      } else setError("Email ou Senha inserido de maneira inválida!");
    } catch (error) {
      setError("Ocorreu um erro durante o login.");
    }
  };

  const verifyEmailsEquals = async (emailUser: string) => {
    try {
      const getAuthMe = await performApi.getDataWithouToken("users");
      const user = getAuthMe.find(
        (item: LoginProps) => item.email === emailUser
      );

      if (user) {
        localStorage.setItem('userType', user.userType)
        return user.userType;
      } else {
        console.log("No user found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const disableErrorMessage = () => {
    setError("");
  };

  return (
    <div>
      <main>
        <section className="login">
          <div className="login-action">
            <div className="login-container">
              <img
                src={Logo.src}
                className="login__image"
                alt="Easy 4 You Logo"
              />
              <span className="subtitle">Bem-vindo de volta!</span>
              <h1 className="title">Login</h1>
              <form className="login__form" action="POST">
                <div className="form__email-container">
                  <label htmlFor="email" className="email__label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="email__input"
                    value={email}
                    onChange={handleEmailChange}
                    onFocus={disableErrorMessage}
                  />
                </div>
                <div className="form__password-container">
                  <label htmlFor="password" className="password__label">
                    Senha
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="password__input"
                    onChange={handlePasswordChange}
                    value={password}
                    onFocus={disableErrorMessage}
                  />
                  <span className="forgot-password">Esqueceu a senha?</span>
                </div>
                {error && <h1 className="error">{error}</h1>}
                <button
                  type="button"
                  onClick={handleLogin}
                  className="login__button"
                >
                  LOGIN
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
