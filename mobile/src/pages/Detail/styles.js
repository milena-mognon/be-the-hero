import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  /* margin-bottom: 16px; */
  margin-top: 48px;
`;

export const Property = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const Value = styled.Text`
  margin-bottom: 8px;
  font-size: 15px;
  color: #737380;
`;

export const Contact = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
  margin-top: 18px;
`;
export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
  background: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;
export const ContactType = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
