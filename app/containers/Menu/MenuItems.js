import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { convertToReal } from '../../utils/convertToReal';
import {
  FoodName,
  IngredientsList,
  FoodTextInfoWrapper,
  FoodDescriptionWrapper,
  FoodPicture,
  PriceWrapper,
  FoodPictureWrapper,
  MenuWrapper,
} from './styles';

const MenuItems = ({ items, isLoading }) => (
  <MenuWrapper>
    <List>
      {!isLoading &&
        items.map((item, i) => (
          <div key={item.name}>
            <ListItem onClick={() => alert(item.name)} button>
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
            {i !== items.length - 1 && <Divider />}
          </div>
        ))}
    </List>
  </MenuWrapper>
);

MenuItems.propTypes = {
  items: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default MenuItems;
