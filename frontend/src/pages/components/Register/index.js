import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Container, Content, Form } from './styles';
import { Button } from '../../../styles/Button';
import logoImg from '../../../assets/images/logo.svg';

export default function Register() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Logo Be the Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajuda a encontrarem os
            casos da sua ONG.
          </p>

          <Link to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar
          </Link>
        </section>
        <Form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="Email" />
          <input placeholder="Whatsapp" />

          <div>
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>
          <Button>Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
