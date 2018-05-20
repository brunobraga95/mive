import styled from 'styled-components';

import * as dimens from '../../assets/dimens';

export const BottomWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  position: relative;
  margin-bottom: ${dimens.defaultHalfSpace + 56}px;
`;
// 56px => height of material ui button navigation

export const styles = {
  root: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    left: 0,
  },
};
