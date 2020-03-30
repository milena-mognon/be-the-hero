import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Container, Form } from './styles';
import { Button } from '../../../styles/Button';
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
          <Button>Entrar</Button>

          <Link to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
