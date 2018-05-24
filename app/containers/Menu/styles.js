
import styled from 'styled-components';
import blueGrey from '@material-ui/core/colors/blueGrey';
import * as dimens from 'assets/dimens';
import red from '@material-ui/core/colors/red';


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
  font-weight: bold;
`;

export const FoodName = styled.p`
  font-weight: bold;
  margin: 0px;
`;

export const IngredientsList = styled.p`
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
`;

export const FoodDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FoodPicture = styled.img`
  max-width:100%;
  max-height:100%;
  border-radius: 50%;
`;

export const PriceWrapper = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: ${red[500]};
  margin: 0px;
`;
