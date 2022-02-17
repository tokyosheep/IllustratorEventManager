import styled from 'styled-components';

export const MainContainer = {
  Container: styled.div`
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 35px 40px 120px ${(400 - (25 + 40 + 120))}px;
    grid-template-rows: 420px 180px;
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
    display: grid;
    align-items: center;
  `,
  RegisteredContainer: styled.div`
    grid-area: registeredList;
    border: 1px solid #999;
    overflow:scroll;
  `,
  RegisterFormContainer: styled.main`
    grid-area:registerForm;
    border: 1px solid #999;
  `,
  NavButtonContainer: styled.nav`
    grid-area: navButtons;
    padding: 10px;
  `
};
