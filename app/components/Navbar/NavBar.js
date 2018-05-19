import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Menu from 'mdi-material-ui/Menu';
import Info from 'mdi-material-ui/Information';

// Components
import Information from 'components/Information';

import { styles } from './defaultStyles';
import { APP_NAME } from '../../assets/labels';
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: false,
    };
  }

  onToggleInfo = () => this.setState({ showInfo: !this.state.showInfo });

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.showInfo && <Information onClose={this.onToggleInfo} />}
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <Menu />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              {APP_NAME}
            </Typography>
            <Button onClick={this.onToggleInfo} color="inherit">
              <Info />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
