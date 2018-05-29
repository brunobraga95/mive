import styled, { css } from 'styled-components';
import blueGrey from '@material-ui/core/colors/blueGrey';
import * as dimens from 'assets/dimens';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

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
  font-size: 14px;
  color: ${grey[600]};
  text-transform: uppercase;
  text-align: center;
  padding: ${dimens.defaultHalfSpace}px;
  transition: all 0.2s;
  ${(props) =>
    props.decorated &&
    css`
      font-weight: bold;
      border-bottom: 1px solid ${grey[600]};
    `} &:focus {
    outline: none;
  }
`;

export const FoodName = styled.p`
  color: ${grey[900]};
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0px;
`;

export const IngredientsList = styled.p`
  font-family: Arial;
  color: ${blueGrey[500]};
  font-size: 12px;
  margin: 0px;
`;

export const FoodTextInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FoodPictureWrapper = styled.div`
  width: 80px;
  flex-basis: 20%;
`;

export const FoodDescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FoodPicture = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;

export const PriceWrapper = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${red[500]};
  margin: 0px;
`;

export const MenuWrapper = styled.div`
  max-height: 50vh;
  overflow: auto;
`;
