
import styled from 'styled-components';
import blueGrey from 'material-ui/colors/blueGrey';

// TODO remove deep selectors on a better opportunity
export const Wrapper = styled.div`
> div > div {
  padding: 0px !important;
}
> div > div > div > div {
  padding: 0px !important;
  width: 200px !important;
}
`;

export const Section = styled.div`
  text-align: center;
  color: ${blueGrey[500]};
  font-weight: bold;
`;
