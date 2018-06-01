import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ItemMenu from './itemMenu';
import { MenuWrapper } from './styles';

const MenuItems = ({ items, addItem }) => (
  <MenuWrapper>
    <List>
      {items.map((item, i) => (
        <div key={item.name}>
          <ItemMenu addItem={addItem} item={item} />
          {i !== items.length - 1 && <Divider />}
        </div>
      ))}
    </List>
  </MenuWrapper>
);

MenuItems.propTypes = {
  items: PropTypes.array,
  addItem: PropTypes.func,
};

export default MenuItems;
