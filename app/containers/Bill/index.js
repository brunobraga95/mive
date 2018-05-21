/* eslint-disable */
import React, { PureComponent } from 'react';

// Redux imports
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeGetOrders } from 'containers/Orders/selectors';

import red from 'material-ui/colors/red';
import blueGrey from 'material-ui/colors/blueGrey';
import { items } from './fakeData';
import BillItem from './BillItem';
import Button from 'material-ui/Button';

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

import Cards from 'mdi-material-ui/Cards';

export class Bill extends PureComponent {
  handleAmount = (items, cover = 0) =>
    items.reduce((finalPrice, { price, quantity }) => {
      return finalPrice + price * quantity;
    }, cover);

  handleOrderBill = () => {
    // This function must send a message to the waiter ordering the bill
    alert('GIMME THE BILL!!');
  };

  render() {
    if (items.length)
      return (
        <Wrapper>
          {console.log(this.props.orders)}
          <Header>
            <QuantityCol>Qtd</QuantityCol>
            <ItemCol>Item</ItemCol>
            <PriceCol>Preço</PriceCol>
          </Header>
          <BillContainer>
            {items.map((item) => (
              <BillItem
                key={item.name}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
              />
            ))}
          </BillContainer>
          <CenterBlock>
            <AmountText>
              Total: {convertToReal(this.handleAmount(items))}
            </AmountText>
            <Button
              onClick={this.handleOrderBill}
              variant="fab"
              color="primary"
              component="span"
            >
              <Cards />
            </Button>
          </CenterBlock>
        </Wrapper>
      );
    return <NoItem>Nenhum pedido feito até o momento</NoItem>;
  }
}

const mapStateToProps = createStructuredSelector({
  orders: makeGetOrders(),
});

export default connect(mapStateToProps)(Bill);
