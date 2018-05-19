/* eslint-disable */
// TODO remove above line after QRCodeReacer uses functions that justifies it not being a pure component
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
// import { startTable } from 'api/firestore/functions';
import { defaultOneAndHalfSpace } from 'assets/dimens';
import { fetchCompanyInfo } from 'containers/Company/actions';
import { makeSelectCompany } from 'containers/Company/selectors';
import { makeSelectTable } from 'containers/Table/selectors';
import { addOrder } from 'api/firestore/functions';
import MenuSections from 'components/MenuSections';
import { tableLogin } from 'api/firestore/auth';
import Typography from 'material-ui/Typography';

// Components
import QRCodeReader from 'components/QRCodeReader';

//IMG

// Initialize firestore

// While there is no design, this component will be used to test the actions, and necessary server calls
const Wrapper = styled.div``;

const Container = styled.div`
  text-align: center;
  padding: 1rem;

  position: relative;
`;

class Landing extends PureComponent {
  componentDidMount() {
    this.props.fetchCompany('lLfqdnain5twuR69KmYy');
  }
  render() {
    console.log(this.props);
    return (
      <Wrapper>
        {/* <div onClick={() => tableLogin('lLfqdnain5twuR69KmYy', 1)}>Acessar</div> */}
        <QRCodeReader />
        {/* <div onClick={() => addOrder([{ teste: 'adding order', value: 12 }])}>
          Add Order
        </div> */}
        <Container>
          <Typography variant="title" gutterBottom>
            Aponte para o QR code da mesa
          </Typography>
          <img src="../../images/qr-code.png" alt="qr code icon" />
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
    fetchCompany: (companyId) => dispatch(fetchCompanyInfo(companyId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
