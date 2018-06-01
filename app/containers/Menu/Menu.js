import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import MenuItems from './MenuItems';
import MenuSections from './MenuSections';

import {
  makeSelectCurrentSection,
  makeSelectIsLoading,
  makeSelectSearch,
  makeFilteredMenu,
  makeSelectSectionItems,
} from './selectors';
import { changeMenuSection, addToShoppingCart } from './actions';

class Menu extends PureComponent {
  updateSection = (section) => {
    this.props.changeMenuSection(section);
  };

  render() {
    const {
      section,
      searchValue,
      isLoading,
      filteredMenu,
      sectionItems,
      addItem,
    } = this.props;
    return (
      <div>
        <MenuSections changeSection={this.updateSection} section={section} />
        <Divider />
        {!isLoading && (
          <MenuItems
            addItem={addItem}
            items={
              searchValue.split('').length > 2
                ? filteredMenu
                : sectionItems.dishes
            }
          />
        )}
      </div>
    );
  }
}

Menu.propTypes = {
  section: PropTypes.string,
  sectionItems: PropTypes.object,
  changeMenuSection: PropTypes.func,
  isLoading: PropTypes.bool,
  searchValue: PropTypes.string,
  filteredMenu: PropTypes.array,
  addItem: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  section: makeSelectCurrentSection(),
  sectionItems: makeSelectSectionItems(),
  isLoading: makeSelectIsLoading(),
  searchValue: makeSelectSearch(),
  filteredMenu: makeFilteredMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeMenuSection: (section) => dispatch(changeMenuSection(section)),
    addItem: (item) => dispatch(addToShoppingCart(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
