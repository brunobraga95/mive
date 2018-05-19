import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCompanyInfo } from 'containers/Company/actions';
import { makeSelectCompany } from 'containers/Company/selectors';
import NavigationButton from 'components/NavigationButtom/NavigationButton';
import Menu from 'components/Menu';
import SearchInput from 'components/SearchInput';
import Loading from 'react-loading-overlay';

import { Wrapper } from './styles';

class Table extends React.PureComponent {
  componentDidMount() {
    const companyId = this.props.match.params.companyId;
    this.props.fetchCompany(companyId);
  }
  render() {
    return (
      <Loading
        active={this.props.company.isLoading}
        spinner
      >
        <Wrapper>
          <SearchInput />
          <Menu />
          <NavigationButton />
        </Wrapper>
      </Loading>
    );
  }
}

Table.propTypes = {
  match: PropTypes.object,
  fetchCompany: PropTypes.func,
  company: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  company: makeSelectCompany(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchCompany: (companyId) => dispatch(fetchCompanyInfo(companyId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
