import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, {
  BottomNavigationAction,
} from 'material-ui/BottomNavigation';

// ICONS
import Silverware from 'mdi-material-ui/Silverware';
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd';
import HumanGreeting from 'mdi-material-ui/HumanGreeting';

import { styles } from './styles';

class SimpleBottomNavigation extends React.Component {
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
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Cardápio" icon={<Silverware />} />
        <BottomNavigationAction label="Comanda" icon={<CurrencyUsd />} />
        <BottomNavigationAction label="Garçom" icon={<HumanGreeting />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
