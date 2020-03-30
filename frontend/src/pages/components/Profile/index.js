import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Container, List } from './styles';
import logoImg from '../../../assets/images/logo.svg';

export default function Profile() {
  return (
    <Container>
      <header>
        <img src={logoImg} alt="Logo Be the Hero" />
        <span>Bem Vinda, APAD</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button className="power" type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <List>
        <li>
          <strong>CASOS: </strong>
          <p>Casos Teste</p>

          <strong>DESCRIÇÃO: </strong>
          <p>Descrição Teste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASOS: </strong>
          <p>Casos Teste</p>

          <strong>DESCRIÇÃO: </strong>
          <p>Descrição Teste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASOS: </strong>
          <p>Casos Teste</p>

          <strong>DESCRIÇÃO: </strong>
          <p>Descrição Teste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASOS: </strong>
          <p>Casos Teste</p>

          <strong>DESCRIÇÃO: </strong>
          <p>Descrição Teste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </List>
    </Container>
  );
}
