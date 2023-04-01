
import { Header } from './Layout.styled';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 20px;
  
  &.active {
    color: orange;
  }
`;

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
    
      <Outlet />
    </>
  );
};

export default Layout;
