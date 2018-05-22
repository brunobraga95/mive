
import styled from 'styled-components';
import blueGrey from '@material-ui/core/colors/blueGrey';
import * as dimens from 'assets/dimens';

// TODO remove deep selectors on a better opportunity
export const Wrapper = styled.div`
  margin-top: ${dimens.defaultHalfSpace}px;
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
  color: ${blueGrey[800]};
  font-weight: bold;
`;
