import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { Container } from './styles';
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
    </Container>
  );
}
