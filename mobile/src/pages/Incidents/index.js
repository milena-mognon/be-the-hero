import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Header,
  TotalIncidents,
  TotalBoldIncidents,
  Title,
  Description,
  IncidentsList,
  Incident,
  Property,
  Value,
  DetailsButton,
  DetailsButtonText,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';

export default function Incidents() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);
    const res = await api.get('incidents', {
      params: {page},
    });

    setIncidents([...incidents, ...res.data]);
    setTotal(res.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  function navigationToDetail(incident) {
    navigation.navigate('Details', {incident});
  }
  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <TotalIncidents>
          Total de <TotalBoldIncidents>{total} casos</TotalBoldIncidents>.
        </TotalIncidents>
      </Header>

      <Title>Bem-vindo</Title>
      <Description>Escolha um dos casos a baixo e salve o dia!</Description>
      <IncidentsList
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({item: incident}) => (
          <Incident>
            <Property>ONG:</Property>
            <Value>{incident.name}</Value>

            <Property>CASO:</Property>
            <Value>{incident.title}</Value>

            <Property>VALOR:</Property>
            <Value>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </Value>

            <DetailsButton onPress={() => navigationToDetail(incident)}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Icon name="arrow-right" size={16} color="#e02041" />
            </DetailsButton>
          </Incident>
        )}
      />
    </Container>
  );
}
