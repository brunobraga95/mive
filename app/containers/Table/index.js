import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCompanyInfo } from 'containers/Company/actions';
import { makeSelectCompany } from 'containers/Company/selectors';
import { makeSelectTable } from 'containers/Table/selectors';
import Menu from 'components/Menu';
import SearchInput from 'components/SearchInput';
import Loading from 'react-loading-overlay';
import Bill from 'containers/Bill';
import { changeTableContext } from './actions';
import { Wrapper } from './styles';

class Table extends React.PureComponent {
  componentDidMount() {
    const companyId = this.props.match.params.companyId;
    this.props.fetchCompany(companyId);
  }
  render() {
    const { table } = this.props;
    if (!table.context) {
      return (
        <Loading active={this.props.company.isLoading} spinner>
          <Wrapper>
            <SearchInput />
            <Menu />
          </Wrapper>
        </Loading>
      );
    }
    return <Bill />;
  }
}

Table.propTypes = {
  match: PropTypes.object,
  fetchCompany: PropTypes.func,
  company: PropTypes.object,
  table: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  company: makeSelectCompany(),
  table: makeSelectTable(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchCompany: (companyId) => dispatch(fetchCompanyInfo(companyId)),
    changeTableContext: (context) => dispatch(changeTableContext(context)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
