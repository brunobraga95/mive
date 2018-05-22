/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// Redux imports
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeGetOrders, makeGetAmount } from 'containers/Orders/selectors';
import red from 'material-ui/colors/red';
import blueGrey from 'material-ui/colors/blueGrey';
import BillItem from './BillItem';
import Button from 'material-ui/Button';
import CreditCardPlus from 'mdi-material-ui/CreditCardPlus';
import Snackbar from 'material-ui/Snackbar';
import { convertToReal } from '../../utils/convertToReal';

import {
  Wrapper,
  BillContainer,
  CenterBlock,
  ItemCol,
  Header,
  QuantityCol,
  PriceCol,
  NoItem,
  AmountText,
} from './styles';

export class Bill extends PureComponent {
  render() {
    const { orders, amount } = this.props;
    if (orders.items.length)
      return (
        <Wrapper>
          {console.log(this.props.orders)}
          <Header>
            <QuantityCol>Qtd</QuantityCol>
            <ItemCol>Item</ItemCol>
            <PriceCol>Preço</PriceCol>
          </Header>
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
            <Button
              color="secondary"
              variant="raised"
              size="small"
              component="span"
            >
              <CreditCardPlus />
              Pedir a conta
            </Button>
          </CenterBlock>
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
  orders: makeGetOrders(),
  amount: makeGetAmount(),
});

export default connect(mapStateToProps)(Bill);
