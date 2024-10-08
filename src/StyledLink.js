import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit;    

  &:hover {
    color: inherit;      
  }

  &:active {
    color: inherit;    
  }
`;

export default StyledLink;
