import styled from 'styled-components';
import * as dimens from 'assets/dimens';
import blueGrey from 'material-ui/colors/blueGrey';
export const Wrapper = styled.div`
  position: relative;
`;

export const ItemContainer = styled.div`
  font-weight: bold;
  color: ${blueGrey[800]};
  font-size: 14px;
  padding: ${dimens.defaultSpace}px;
  display: flex;
  margin: 0px ${dimens.defaultSpace}px;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid ${blueGrey[50]};
  &:nth-child(even) {
    background: ${blueGrey[50]};
  }
  &:active {
    background: ${blueGrey[100]};
  }
`;

export const Header = ItemContainer.extend`
  &:active {
    background: none;
  }
  border: none;
  font-size: 16px;
  margin: 0 ${dimens.defaultSpace}px;
  border-bottom: 1px solid ${blueGrey[50]};
`;

export const QuantityCol = styled.div`
  flex-basis: 25%;
`;

export const ItemCol = styled.div`
  text-align: left;
  flex-basis: 50%;
`;

export const PriceCol = styled.div`
  flex-basis: 25%;
`;

export const BillContainer = styled.div`
  position: relative;
  max-height: 40vh;
  overflow: auto;
`;

export const CenterBlock = styled.div`
  text-align: center;
`;

export const NoItem = styled.h4`
  text-align: center;
  left: auto;
  margin-top: 40%;
  color: ${blueGrey[800]};
`;

export const AmountText = styled.h4`
  color: ${blueGrey[800]};
`;
