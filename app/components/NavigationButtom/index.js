import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, {
  BottomNavigationAction,
} from 'material-ui/BottomNavigation';
import Button from 'material-ui/Button';
// ICONS
import HumanGreeting from 'mdi-material-ui/HumanGreeting';
import Silverware from 'mdi-material-ui/Silverware';
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd';

import { styles, BottomWrapper, ButtonContainer } from './styles';

class SimpleBottomNavigation extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <BottomWrapper>
        <ButtonContainer>
          <Button variant="raised" color="primary">
            <HumanGreeting /> Chamar garçom
          </Button>{' '}
        </ButtonContainer>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Cardápio" icon={<Silverware />} />
          <BottomNavigationAction label="Comanda" icon={<CurrencyUsd />} />
        </BottomNavigation>
      </BottomWrapper>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
