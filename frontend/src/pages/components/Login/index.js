import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Container, Form } from './styles';
import { Button } from '../../../styles/Button';
import heroesImg from '../../../assets/images/heroes.png';
import logoImg from '../../../assets/images/logo.svg';
import api from '../../../services/api';

export default function Login() {
  const [id, setId] = useState('');
  const history = useHistory();
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await api.post('session', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', res.data.name);
      history.push('/profile');
    } catch (error) {
      alert('falha no login');
    }
  }
  return (
    <Container>
      <section>
        <img src={logoImg} alt="Be the Hero" />

        <Form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>
          <input
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="Sua ID"
          />
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
