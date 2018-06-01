/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// Redux imports
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectOrders,
  makeSelectAmount,
} from 'containers/Orders/selectors';
import red from 'material-ui/colors/red';
import blueGrey from 'material-ui/colors/blueGrey';
import BillItem from './BillItem';
import ButtonBase from 'material-ui/ButtonBase';
import CreditCardPlus from 'mdi-material-ui/CreditCardPlus';
import { convertToReal } from '../../utils/convertToReal';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';
import {
  Wrapper,
  BillContainer,
  CenterBlock,
  RightBlock,
  ItemCol,
  Header,
  QuantityCol,
  PriceCol,
  NoItem,
  AmountText,
  PaymentButton,
  delay,
  Padding,
} from './styles';

export class Bill extends PureComponent {
  render() {
    const { orders, amount } = this.props;
    if (orders.items.length)
      return (
        <Wrapper>
          <Header>
            <QuantityCol>Qtd</QuantityCol>
            <ItemCol>Item</ItemCol>
            <PriceCol>Preço</PriceCol>
          </Header>
          <Padding>
            <Divider />
          </Padding>
          <BillContainer>
            {orders.items.map((item) => (
              <BillItem
                key={item.name}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
              />
            ))}
          </BillContainer>
          <CenterBlock>
            <AmountText>Total: {convertToReal(amount)}</AmountText>
          </CenterBlock>
          <RightBlock>
            <Slide
              style={delay}
              direction="left"
              in={true}
              mountOnEnter
              unmountOnExit
            >
              <ButtonBase focusRipple>
                <PaymentButton>
                  <CreditCardPlus />
                  PEDIR A CONTA
                </PaymentButton>
              </ButtonBase>
            </Slide>
          </RightBlock>
        </Wrapper>
      );
    return <NoItem>Nenhum pedido feito até o momento</NoItem>;
  }
}

Bill.propTypes = {
  orders: PropTypes.object,
  amount: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  orders: makeSelectOrders(),
  amount: makeSelectAmount(),
});

export default connect(mapStateToProps)(Bill);
