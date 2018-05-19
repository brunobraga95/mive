import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Style
import grey from 'material-ui/colors/grey';
// Components
import InfoSlider from './InfoSlider';

import { messages } from './messages';

const Container = styled.div`
  text-align: center;
  z-index: 1500;
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${grey[100]};
`;

const BottomBlock = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export class Information extends Component {
  constructor(props) {
    super(props);
    // the slide must have images, maybe animations. For a while, It's just included text content
    this.state = {
      infos: messages,
      selectedInfo: 0,
    };
  }

  handleNextInfo = () => {
    if (this.state.selectedInfo < this.state.infos.length - 1) {
      this.setState({ selectedInfo: this.state.selectedInfo + 1 });
    } else {
      this.props.onClose();
    }
  };

  handlePreviousInfo = () => {
    if (this.state.selectedInfo > 0) {
      this.setState({ selectedInfo: this.state.selectedInfo - 1 });
    }
  };

  render() {
    const { infos, selectedInfo } = this.state;
    return (
      <Container>
        <h4>{infos[selectedInfo]}</h4>
        <BottomBlock>
          <InfoSlider
            data={this.state.infos}
            selected={this.state.selectedInfo}
            onNext={this.handleNextInfo}
            onPrevious={this.handlePreviousInfo}
          />
        </BottomBlock>
      </Container>
    );
  }
}

Information.propTypes = {
  onClose: PropTypes.func.isRequired,
};
