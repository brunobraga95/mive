import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ItemContainer, ItemCol, QuantityCol, PriceCol } from './styles';
import { convertToReal } from '../../utils/convertToReal';

export default class BillItem extends PureComponent {
  render() {
    const { name, quantity, price } = this.props;
    return (
      <ItemContainer>
        <QuantityCol>{quantity} </QuantityCol>
        <ItemCol>{name} </ItemCol>
        <PriceCol>{convertToReal(price * quantity)}</PriceCol>
      </ItemContainer>
    );
  }
}

BillItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
