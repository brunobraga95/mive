import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import ChefronLeft from 'mdi-material-ui/ChevronLeft';
import ChefronRight from 'mdi-material-ui/ChevronRight';

const styles = {
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
};

class ProgressMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.props.onNext();
  };

  handleBack = () => {
    this.props.onPrevious();
  };

  // If the last slide is selected, the button must call 'Sair' and close the slider
  isLastSlide = () =>
    this.props.selected === this.props.data.length - 1 ? 'Sair' : 'Próximo';

  render() {
    const { classes, theme, data, selected } = this.props;

    return (
      <MobileStepper
        variant="progress"
        steps={data.length}
        position="static"
        activeStep={selected}
        className={classes.root}
        nextButton={
          <Button
            size="small"
            onClick={this.handleNext}
            disabled={selected === data.length}
          >
            {this.isLastSlide()}

            {theme.direction === 'rtl' ? <ChefronRight /> : <ChefronRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={this.handleBack} disabled={!selected}>
            {theme.direction === 'rtl' ? <ChefronLeft /> : <ChefronLeft />}
            Anterior
          </Button>
        }
      />
    );
  }
}

ProgressMobileStepper.propTypes = {
  selected: PropTypes.number.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ProgressMobileStepper);
