import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import NavLink from '../NavLink/NavLink';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label='Menu'>
        <CloseButton onClick={onDismiss}>
          <Icon id='close' /><VisuallyHidden>Close</VisuallyHidden>
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-color: var(--color-gray-700-transparent);

  display: flex;
`;

const Content = styled(DialogContent)`
  background-color: var(--color-white);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 75px;

  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  right: 22px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: auto;
  margin-bottom: auto;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > a {
    text-decoration: none;
    color: var(--color-gray-700);
    font-size: 14px;
  }
`;

export default MobileMenu;
