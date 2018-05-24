import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import MenuItems from './MenuItems';
import MenuSections from './MenuSections';
import { makeSelectCurrentSection, makeSelectMenu, makeSelectIsLoading } from './selectors';
import { changeMenuSection } from './actions';

class Menu extends PureComponent {

  updateSection = (section) => {
    this.props.changeMenuSection(section);
  }

  render() {
    return (
      <div>
        <MenuSections section={this.props.section} />
        <MenuItems section={this.props.section} menu={this.props.menu} isLoading={this.props.isLoading} />
      </div>
    );
  }
}

Menu.propTypes = {
  menu: PropTypes.object,
  section: PropTypes.string,
  changeMenuSection: PropTypes.func,
  isLoading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  menu: makeSelectMenu(),
  section: makeSelectCurrentSection(),
  isLoading: makeSelectIsLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeMenuSection: (section) => dispatch(changeMenuSection(section)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
