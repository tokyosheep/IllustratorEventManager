import React, { useMemo } from 'react';
import { selectActionSet } from '../redux/features/registered/registerFormSlice';
import { loadActions } from '../redux/features/actions/actionSlice';
import { init } from '../fileSystem/init';
import { getActionsFromJSX } from '../fileSystem/getAction';
import { getScripts } from '../fileSystem/loadScripts';
import Header from '../components/header/header';
import MainSwitch from '../components/mainSwitch/mainSwitch';
import RegisteredList from '../components/registeredArea/registeredList';
import MainRegisterForm from '../components/main/mainRegisterForm';
import NavButtons from '../components/nav/navButtons';
import { MainContainer } from '../styles/containers';
import { useAppDispatch } from '../redux/app/hooks';
const { Container } = MainContainer;

const Layout = () => {
  const dispatch = useAppDispatch();
  useMemo(() => {
    init();
    (async () => {
      await getScripts();
      const actionObj = await getActionsFromJSX();
      if (!actionObj) return;
      dispatch(loadActions({
        sets: actionObj,
        actions: actionObj[0].actions
      }));
      dispatch(selectActionSet({ set: actionObj[0].setName, action: actionObj[0].actions[0] }));
    })();
  }, []);
  return (
      <Container>
        <Header />
        <MainSwitch />
        <RegisteredList />
        <MainRegisterForm />
        <NavButtons />
      </Container>
  );
};

export default Layout;
