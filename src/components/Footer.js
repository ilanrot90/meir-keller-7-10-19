import React from 'react';
import styled from 'styled-components';
import { white } from '../styles/colors';
import UnitSwitch from './UnitSwitch';

const FooterStyle = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: ${white};
  height: 80px;
`;

const Footer = ({ children }) => {
  return (
    <FooterStyle>
      <UnitSwitch />
      {children}
    </FooterStyle>
  );
};

export default React.memo(Footer);
