/* eslint-disable */
// TODO remove above line after QRCodeReacer uses functions that justifies it not being a pure component
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { push } from 'react-router-redux';
import { defaultOneAndHalfSpace } from 'assets/dimens';
import { fetchCompanyInfo } from 'containers/Company/actions';
import { makeSelectCompany } from 'containers/Company/selectors';
import { makeSelectTable } from 'containers/Table/selectors';
import { addOrder } from 'api/firestore/functions';
import { tableLogin } from 'api/firestore/auth';
import Typography from '@material-ui/core/Typography';

import QRCodeReader from 'components/QRCodeReader';

const Wrapper = styled.div``;

const Container = styled.div`
  text-align: center;
  padding: 1rem;

  position: relative;
`;

class Landing extends PureComponent {
  goToTable = () => {
    this.props.goToTable('lLfqdnain5twuR69KmYy', 1);
  };
  render() {
    return (
      <Wrapper>
        <QRCodeReader />

        <Container onClick={this.goToTable}>
          click here to go menu
          <Typography variant="title" gutterBottom>
            Aponte para o QR code da mesa
          </Typography>
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  company: makeSelectCompany(),
  table: makeSelectTable(),
});

function mapDispatchToProps(dispatch) {
  return {
    goToTable: (companyId, tableNumber) =>
      dispatch(push(`company/${companyId}/table/${tableNumber}`)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
