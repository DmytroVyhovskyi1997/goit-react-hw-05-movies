import PropTypes from 'prop-types';
import { StyledLink } from './BackButton.styled';

const BackButton = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

BackButton.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default BackButton;
