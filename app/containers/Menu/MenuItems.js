import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import convertToReal from '../../utils/convertToReal';
import {
  FoodName,
  IngredientsList,
  FoodTextInfoWrapper,
  FoodDescriptionWrapper,
  FoodPicture,
  PriceWrapper,
  FoodPictureWrapper,
} from './styles';

const MenuItems = ({ menu, section, isLoading }) => (
  <List component="nav">
    {!isLoading &&
      menu[section].dishes.map((item, i) => (
        <div key={item.name}>
          <ListItem button>
            <FoodDescriptionWrapper>
              <FoodTextInfoWrapper>
                <FoodName>{item.name}</FoodName>
                <IngredientsList>
                  {item.ingredients.reduce(
                    (ingredient, curr) => `${curr}, ${ingredient}`
                  )}
                </IngredientsList>
                <PriceWrapper>{convertToReal(item.price)}</PriceWrapper>
              </FoodTextInfoWrapper>
              <FoodPictureWrapper>
                <FoodPicture src={item.picture} />
              </FoodPictureWrapper>
            </FoodDescriptionWrapper>
          </ListItem>
          {i !== menu[section].dishes.length - 1 && <Divider />}
        </div>
      ))}
  </List>
);

MenuItems.propTypes = {
  section: PropTypes.string,
  isLoading: PropTypes.bool,
  menu: PropTypes.shape({
    picture: PropTypes.string,
    name: PropTypes.string,
    ingredients: PropTypes.number,
    price: PropTypes.number,
  }),
};

export default MenuItems;
