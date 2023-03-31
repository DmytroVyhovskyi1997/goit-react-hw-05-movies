
import { Header } from './Layout.styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 20px;

  &.active {
    color: orange;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      {children}
    </>
  );
};

export default Layout;
