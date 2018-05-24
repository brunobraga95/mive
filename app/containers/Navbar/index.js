import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';
import { makeSelectCompanyName } from 'containers/Company/selectors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Info from 'mdi-material-ui/Information';
import Slide from '@material-ui/core/Slide';

// Components
import Information from 'components/Information';

import { styles } from './defaultStyles';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: false,
    };
  }

  onToggleInfo = () => this.setState({ showInfo: !this.state.showInfo });

  render() {
    const { classes, companyName } = this.props;
    const { showInfo } = this.state;
    return (
      <div>
        <Slide direction="up" in={showInfo} mountOnEnter unmountOnExit>
          <Information onClose={this.onToggleInfo} />
        </Slide>

        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.textContent}
            >
              {companyName}
            </Typography>
            <Button
              onClick={this.onToggleInfo}
              color="inherit"
              className={classes.infoContent}
            >
              <Info />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  companyName: makeSelectCompanyName(),
});

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  companyName: PropTypes.string,
};

export default connect(mapStateToProps)(withStyles(styles)(NavBar));
