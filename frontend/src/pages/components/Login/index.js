import React from 'react';

import { FiLogIn } from 'react-icons/fi';
import { Container, Form, SubmitButton } from './styles';
import heroesImg from '../../../assets/images/heroes.png';
import logoImg from '../../../assets/images/logo.svg';

export default function Login() {
  return (
    <Container>
      <section>
        <img src={logoImg} alt="Be the Hero" />

        <Form>
          <h1>Faça seu Login</h1>
          <input placeholder="Sua ID" />
          <SubmitButton>Entrar</SubmitButton>

          <a href="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </a>
        </Form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
