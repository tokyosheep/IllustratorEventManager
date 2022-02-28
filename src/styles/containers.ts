import styled from 'styled-components';

export const MainContainer = {
  Container: styled.div`
    position: relative;
    z-index: 1;
    display: grid;
    padding: 10px;
    box-sizing: border-box;
    grid-template-rows: 35px 40px 120px minmax(170px, 1fr);
    grid-template-columns: minmax(330px, 1fr) 180px;
    grid-template-areas:
    'header header'
    'switchArea switchArea'
    'registeredList navButtons'
    'registerForm navButtons'
  `,
  HeaderContainer: styled.header`
    grid-area: header;
    display: grid;
    align-items: center;
  `,
  SwitchContainer: styled.div`
    grid-area: switchArea;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  RegisteredContainer: styled.div`
    grid-area: registeredList;
    border: 1px solid #999;
    overflow:scroll;
  `,
  RegisterFormContainer: styled.main`
    grid-area:registerForm;
    margin-top: 5px;
    border: 1px solid #999;
    z-index: 1;
    position: relative;
  `,
  NavButtonContainer: styled.nav`
    grid-area: navButtons;
    padding: 10px;
    padding-top: 0px;
  `
};
