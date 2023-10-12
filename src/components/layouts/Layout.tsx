import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Appbar from '../Appbar';
import GlobalStyles from '../../assets/GlobalStyles';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const StyledLayoutWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  padding-bottom: 20px;
`;

const StyledOutletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const StyledAppBarWrapper = styled('div')`
  height: 64px;
`;

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <StyledLayoutWrapper>
      <GlobalStyles />
      {pathname !== '' && (
        <StyledAppBarWrapper>
          <Appbar />
        </StyledAppBarWrapper>
      )}

      <StyledOutletWrapper>
        <Outlet />
      </StyledOutletWrapper>
    </StyledLayoutWrapper>
  );
};

export default Layout;
