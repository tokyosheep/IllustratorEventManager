import React, { useMemo } from 'react';
import { selectActionSet, selectScript } from '../redux/features/registered/registerFormSlice';
import { loadActions } from '../redux/features/actions/actionSlice';
import { init } from '../fileSystem/init';
import { getActionsFromJSX } from '../fileSystem/getAction';
import { loadInitJsx } from '../fileSystem/loadScripts';
import CoverLayer from '../components/overLayer/overLayer';
import EventSeachBox from '../components/searchBox/eventSeachBox';
import Header from '../components/header/header';
import MainSwitch from '../components/mainSwitch/mainSwitch';
import RegisteredList from '../components/registeredArea/registeredList';
import MainRegisterForm from '../components/main/mainRegisterForm';
import NavButtons from '../components/nav/navButtons';
import { MainContainer } from '../styles/containers';
import { useAppDispatch } from '../redux/app/hooks';
import { addScripts } from '../redux/features/scripts/scriptSlice';
import BarDisplay from '../components/parts/detailSideBar';

const { Container } = MainContainer;

const Layout = () => {
  const dispatch = useAppDispatch();
  useMemo(() => {
    init();
    (async () => {
      const actionObj = await getActionsFromJSX();
      if (!actionObj) return;
      dispatch(loadActions({
        sets: actionObj,
        actions: actionObj[0].actions
      }));
      dispatch(selectActionSet({ set: actionObj[0].setName, action: actionObj[0].actions[0] }));
    })();
    (async () => {
      try {
        const initScripts = await loadInitJsx();
        console.log(initScripts);
        if (!initScripts) return;
        dispatch(addScripts(initScripts));
        dispatch(selectScript(initScripts[0]));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <>
      <EventSeachBox />
      <CoverLayer />
      <BarDisplay />
      <Container>
        <Header />
        <MainSwitch />
        <RegisteredList />
        <MainRegisterForm />
        <NavButtons />
      </Container>
    </>
  );
};

export default Layout;
