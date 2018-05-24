import styled from 'styled-components';
import * as dimens from 'assets/dimens';
import blueGrey from 'material-ui/colors/blueGrey';
import grey from 'material-ui/colors/grey';
import red from 'material-ui/colors/red';

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
  &:nth-child(even) {
    background: ${grey[100]};
  }
  &:active {
    background: ${grey[200]};
  }
`;

export const Header = ItemContainer.extend`
  &:active {
    background: none;
  }
  border: none;
  font-size: 16px;
  margin: 0 ${dimens.defaultSpace}px;
  border-bottom: 1px solid ${grey[200]};
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
  max-height: 30vh;
  overflow: auto;
`;

export const CenterBlock = styled.div`
  text-align: center;
`;

export const RightBlock = styled.div`
  text-align: right;
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

export const PaymentButton = styled.span`
  padding: ${dimens.defaultSpace / 2}px;
  font-size: 12px;
  background: ${red[500]};
  color: white;
  font-weight: bold;
  border-right: none;

  border-right: none;
  border-radius: 40px 0 0 40px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
`;

export const delay = { transitionDelay: 600 };
