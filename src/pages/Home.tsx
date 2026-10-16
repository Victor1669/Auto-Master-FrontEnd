import { useState } from "react";
import type { FormEvent } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

import "./Home.css";

import logoDesktop from "../assets/logo-desktop.png";
import logoMobile from "../assets/logo-mobile.png";
import CroppedLogo from "../components/CroppedLogo";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className="home" data-bs-theme="dark">
      <section className="home-mobile d-flex d-lg-none flex-column align-items-center px-4 pb-4">
        <CroppedLogo
          className="home-mobile__logo"
          src={logoMobile}
          alt="Automaster Mecânico"
          imageWidth={468}
          imageHeight={533}
          cropX={25}
          cropY={114}
          cropWidth={412}
          cropHeight={312}
        />

        <h1 className="home-mobile__tagline">
          Seu trabalho,
          <br />
          mais organizado.
        </h1>

        <div className="home-mobile__actions d-grid gap-3 w-100">
          <Button type="button" className="btn-automaster">
            Entrar
          </Button>
          <Button type="button" className="btn-automaster-ghost">
            Sair
          </Button>
        </div>

        <p className="small text-body-secondary mt-3 mb-0">
          Automaster • Mecânico
        </p>
      </section>

      <section className="home-desktop d-none d-lg-flex align-items-center">
        <Container className="py-5">
          <Row className="home-desktop__row">
            <Col lg={7} xl={8} className="align-self-start pt-3">
              <CroppedLogo
                className="home-desktop__logo"
                src={logoDesktop}
                alt="Automaster Gerenciamento Automotivo"
                imageWidth={1444}
                imageHeight={736}
                cropX={140}
                cropY={223}
                cropWidth={1167}
                cropHeight={291}
              />
              <h1 className="home-desktop__tagline">
                Seu veículo em boas mãos, sempre.
              </h1>
            </Col>

            <Col lg={5} xl={4} className="align-self-center">
              <Card className="home-card">
                <Card.Body className="p-4">
                  <Form onSubmit={handleSubmit} className="d-grid gap-3">
                    <div>
                      <h2 className="h4 fw-semibold mb-1">
                        Bem-vindo de volta!
                      </h2>
                      <p className="small text-body-secondary mb-0">
                        Faça login para acessar o sistema.
                      </p>
                    </div>

                    <Form.Group controlId="home-email">
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="bi bi-envelope" />
                        </InputGroup.Text>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="E-mail"
                          aria-label="E-mail"
                          autoComplete="email"
                          required
                        />
                      </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="home-password">
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="bi bi-lock" />
                        </InputGroup.Text>
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Senha"
                          aria-label="Senha"
                          autoComplete="current-password"
                          required
                        />
                        <Button
                          type="button"
                          className="home-toggle"
                          onClick={() => setShowPassword((value) => !value)}
                          aria-label={
                            showPassword ? "Ocultar senha" : "Mostrar senha"
                          }
                        >
                          <i
                            className={`bi ${
                              showPassword ? "bi-eye-slash" : "bi-eye"
                            }`}
                          />
                        </Button>
                      </InputGroup>
                    </Form.Group>

                    <Form.Check
                      type="checkbox"
                      id="home-remember"
                      name="remember"
                      label="Lembrar-me"
                    />

                    <Button type="submit" className="btn-automaster">
                      <i className="bi bi-box-arrow-in-right me-2" />
                      Entrar
                    </Button>

                    <Button
                      type="button"
                      variant="link"
                      className="home-link mx-auto p-0"
                    >
                      Esqueceu a senha?
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
