import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';

import { convertToReal } from '../../utils/convertToReal';
import {
  FoodName,
  IngredientsList,
  FoodTextInfoWrapper,
  FoodDescriptionWrapper,
  FoodPicture,
  PriceWrapper,
  FoodPictureWrapper,
  ChooseQuantityWrapper,
} from './styles';

const ItemMenu = ({
  addItem,
  item,
  showModal,
  handleClick,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  if (showModal) {
    return (
      <Fade in={showModal}>
        <ChooseQuantityWrapper>
          <button onClick={handleClick}>{item.name}</button>
          <br />
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
          <br />
          <button
            onClick={() => {
              addItem({
                name: item.name,
                quantity,
                price: quantity * item.price,
              });
              handleClick();
            }}
          >
            Adicionar
          </button>
        </ChooseQuantityWrapper>
      </Fade>
    );
  }
  return (
    <ListItem onClick={handleClick} button>
      <FoodDescriptionWrapper>
        <FoodTextInfoWrapper>
          <FoodName>{item.name}</FoodName>
          {item.ingredients && (
            <IngredientsList>
              {item.ingredients.reduce(
                (ingredient, curr) => `${curr}, ${ingredient}`
              )}
            </IngredientsList>
          )}
          <PriceWrapper>{convertToReal(item.price)}</PriceWrapper>
        </FoodTextInfoWrapper>
        <FoodPictureWrapper>
          <FoodPicture src={item.picture} />
        </FoodPictureWrapper>
      </FoodDescriptionWrapper>
    </ListItem>
  );
};

ItemMenu.propTypes = {
  item: PropTypes.object,
  addItem: PropTypes.func,
  handleClick: PropTypes.func,
  showModal: PropTypes.bool,
  quantity: PropTypes.number,
  increaseQuantity: PropTypes.func,
  decreaseQuantity: PropTypes.func,
};

const enhance = compose(
  withState('showModal', 'onToggleModal', false),
  withState('quantity', 'handleQuantity', 1),
  withHandlers({
    handleClick: (props) => (event) => props.onToggleModal(!props.showModal),
    increaseQuantity: (props) => (event) =>
      props.handleQuantity(props.quantity + 1),
    decreaseQuantity: (props) => (event) =>
      props.handleQuantity(
        props.quantity > 1 ? props.quantity - 1 : props.quantity
      ),
  })
);

export default enhance(ItemMenu);
