import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { Redirect } from 'react-router-dom';

export class QRCodeReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: 'No result',
    };
  }
  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });

      // Redirecionar para a url do cardápio
      return <Redirect to="/somewhere/else" />;
    }

    return null;
  };
  handleError(err) {
    console.error(err);
  }
  render() {
    return (
      <div>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        {/* <p>{this.state.result}</p> */}
      </div>
    );
  }
}
