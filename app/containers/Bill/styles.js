import styled from 'styled-components';
import * as dimens from 'assets/dimens';
import grey from 'material-ui/colors/grey';
import red from 'material-ui/colors/red';

export const Wrapper = styled.div`
  position: relative;
`;

export const Padding = styled.div`
  margin: 0 ${dimens.defaultSpace}px;
`;

export const ItemContainer = styled.div`
  font-family: 'Roboto';
  font-weight: 500;
  padding: ${dimens.defaultSpace}px;
  color: ${grey[900]};
  font-size: 14px;
  display: flex;
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
  color: ${grey[600]};
  border: none;
  font-size: 16px;
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
  color: ${grey[900]};
`;

export const AmountText = styled.h4`
  color: ${grey[900]};
  font-family: 'Roboto';
  font-weight: 500;
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
