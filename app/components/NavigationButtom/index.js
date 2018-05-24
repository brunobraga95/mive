import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { changeTableContext } from 'containers/Table/actions';
import { makeSelectTable } from 'containers/Table/selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Button from '@material-ui/core/Button';
// ICONS
import HumanGreeting from 'mdi-material-ui/HumanGreeting';
import Silverware from 'mdi-material-ui/Silverware';
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd';

import { styles, BottomWrapper, ButtonContainer } from './styles';

const SimpleBottomNavigation = ({ classes, table, onChangeTableContext }) => (
  <BottomWrapper>
    <ButtonContainer>
      <Button variant="raised" color="primary">
        <HumanGreeting /> Chamar garçom
      </Button>{' '}
    </ButtonContainer>
    <BottomNavigation
      value={table.context}
      onChange={(event, value) => onChangeTableContext(value)}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Cardápio" icon={<Silverware />} />
      <BottomNavigationAction label="Comanda" icon={<CurrencyUsd />} />
    </BottomNavigation>
  </BottomWrapper>
);

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  table: PropTypes.object,
  onChangeTableContext: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  table: makeSelectTable(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeTableContext: (context) => dispatch(changeTableContext(context)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(SimpleBottomNavigation)
);
