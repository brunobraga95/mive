import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, withState, withHandlers } from 'recompose';
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

const NavBar = ({ classes, companyName, showInfo, handleClick }) => (
  <div>
    <Slide direction="up" in={showInfo} mountOnEnter unmountOnExit>
      <Information onClose={handleClick} />
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
          onClick={handleClick}
          color="inherit"
          className={classes.infoContent}
        >
          <Info />
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

const mapStateToProps = createStructuredSelector({
  companyName: makeSelectCompanyName(),
});

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  companyName: PropTypes.string,
  showInfo: PropTypes.bool,
  handleClick: PropTypes.func,
};

const enhance = compose(
  withState('showInfo', 'onToggleInfo', false),
  withHandlers({
    handleClick: (props) => (event) => props.onToggleInfo(!props.showInfo),
  }),
  withStyles(styles),
  connect(mapStateToProps)
);

export default enhance(NavBar);
