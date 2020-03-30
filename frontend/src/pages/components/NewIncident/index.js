import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Content } from './styles';
import { Button } from '../../../styles/Button';
import logoImg from '../../../assets/images/logo.svg';

export default function NewIncident() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Logo Be the Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>
        <Form>
          <input placeholder="Titulo do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" />
          <Button>Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
