import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCompanyInfo } from 'containers/Company/actions';
import { makeSelectCompany } from 'containers/Company/selectors';
import { makeSelectTable } from 'containers/Table/selectors';
import { makeSelectSearch } from 'containers/Menu/selectors';
import { changeSearchValue } from 'containers/Menu/actions';
import Menu from 'containers/Menu';
import Bill from 'containers/Bill';
import SearchInput from 'components/SearchInput';
import Loading from 'react-loading-overlay';
import { changeTableContext } from './actions';
import { Wrapper } from './styles';

class Table extends React.PureComponent {
  componentDidMount() {
    const companyId = this.props.match.params.companyId;
    this.props.fetchCompany(companyId);
  }
  render() {
    const { table, searchValue, handleSearchChange } = this.props;
    if (!table.context) {
      return (
        <Loading active={this.props.company.isLoading} spinner>
          <Wrapper>
            <SearchInput
              value={searchValue}
              handleChange={handleSearchChange}
            />
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
  searchValue: PropTypes.string,
  handleSearchChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  company: makeSelectCompany(),
  table: makeSelectTable(),
  searchValue: makeSelectSearch(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchCompany: (companyId) => dispatch(fetchCompanyInfo(companyId)),
    changeTableContext: (context) => dispatch(changeTableContext(context)),
    handleSearchChange: (value) => dispatch(changeSearchValue(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
