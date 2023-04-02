// import PropTypes from 'prop-types';
import { StyledLink } from './BackButton.styled';


const BackButton = ({ to, children }) => {
    return <StyledLink to={to}>{children}</StyledLink>;
  };
  
  export default BackButton;