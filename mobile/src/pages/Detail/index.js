import React from 'react';
import {Image, Linking} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Header,
  BackButton,
  Incident,
  Property,
  Value,
  Contact,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ContactType,
} from './styles';
import logoImg from '../../assets/logo.png';
export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const incidentValue = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(incident.value);
  const message = `Olá ${incident.name}, estou entrando en contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${incidentValue}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`,
    );
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <BackButton onPress={navigateBack}>
          <Icon name="arrow-left" size={28} color="#E82041" />
        </BackButton>
      </Header>

      <Incident>
        <Property>ONG:</Property>
        <Value>
          {incident.name} de {incident.city}/{incident.uf}
        </Value>

        <Property>CASO:</Property>
        <Value>{incident.title}</Value>

        <Property>DESCRIÇÃO:</Property>
        <Value>{incident.description}</Value>

        <Property>VALOR:</Property>
        <Value>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value)}
        </Value>
      </Incident>

      <Contact>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>
        <HeroDescription>Entre em contato:</HeroDescription>
        <Actions>
          <Action onPress={sendWhatsapp}>
            <ContactType>Whatsapp</ContactType>
          </Action>
          <Action onPress={sendMail}>
            <ContactType>E-mail</ContactType>
          </Action>
        </Actions>
      </Contact>
    </Container>
  );
}
