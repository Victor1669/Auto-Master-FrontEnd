import type { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../styles/auth.css";

import logoDesktop from "../assets/logo-desktop.png";
import logoMobile from "../assets/logo-mobile.png";
import LoginForm from "./LoginForm";

type AuthScreenProps = {
  variant: "welcome" | "login";
  children: ReactNode;
};

export default function AuthScreen({ variant, children }: AuthScreenProps) {
  return (
    <main className="auth" data-bs-theme="dark">
      <section
        className={`auth-mobile auth-mobile--${variant} d-flex d-lg-none flex-column align-items-center p-4`}
      >
        <img
          src={logoMobile}
          alt="Automaster Mecânico"
          className="auth-mobile__logo img-fluid"
          draggable={false}
        />

        <div className="auth-mobile__body">{children}</div>

        <p className="small text-body-secondary mt-3 mb-0">
          Automaster • Mecânico
        </p>
      </section>

      <section className="auth-desktop d-none d-lg-flex align-items-center">
        <Container className="py-5">
          <Row className="auth-desktop__row">
            <Col lg={7} xl={8} className="align-self-start pt-3">
              <img
                src={logoDesktop}
                alt="Automaster Gerenciamento Automotivo"
                className="auth-desktop__logo img-fluid"
                draggable={false}
              />
              <h1 className="auth-desktop__tagline">
                Seu veículo em boas mãos, sempre.
              </h1>
            </Col>

            <Col lg={5} xl={4} className="align-self-center">
              <LoginForm title="Bem-vindo de volta!" />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
