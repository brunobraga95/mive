import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Button from '@material-ui/core/Button';
import HumanGreeting from 'mdi-material-ui/HumanGreeting';
import Silverware from 'mdi-material-ui/Silverware';
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd';
import { styles, BottomWrapper, ButtonContainer } from './styles';

const SimpleBottomNavigation = ({ context, classes, changeTableContext }) => (
  <BottomWrapper>
    <ButtonContainer>
      <Button variant="raised" color="primary">
        <HumanGreeting /> Chamar garçom
      </Button>{' '}
    </ButtonContainer>
    <BottomNavigation
      value={context}
      onChange={(event, value) => changeTableContext(value)}
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
  changeTableContext: PropTypes.func,
  context: PropTypes.number,
};

export default withStyles(styles)(SimpleBottomNavigation);
