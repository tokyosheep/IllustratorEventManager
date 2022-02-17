import React from 'react';
import Header from '../components/header/header';
import MainSwitch from '../components/mainSwitch/mainSwitch';
import RegisteredList from '../components/registeredArea/registeredList';
import MainRegisterForm from '../components/main/mainRegisterForm';
import NavButtons from '../components/nav/navButtons';
import { MainContainer } from '../styles/containers';
const { Container } = MainContainer;

const Layout = () => {
  return (
      <Container>
        <Header />
        <MainSwitch />
        <RegisteredList />
        <MainRegisterForm />
        <NavButtons />
      </Container>
  )
}

export default Layout;
