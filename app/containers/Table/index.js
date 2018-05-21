import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCompanyInfo } from 'containers/Company/actions';
import { makeSelectCompany } from 'containers/Company/selectors';
import { makeSelectTable } from 'containers/Table/selectors';
<<<<<<< HEAD
import NavigationButton from 'components/NavigationButtom/NavigationButton';
import Menu from 'containers/Menu';
=======
import NavigationButton from 'components/NavigationButtom';
import Menu from 'components/Menu';
>>>>>>> [CREATE] Bill component to display de Orders info
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
    return (
      <Loading active={this.props.company.isLoading} spinner>
        <Wrapper>
          <SearchInput />
          <Menu />
          <NavigationButton
            changeTableContext={this.props.changeTableContext}
            context={this.props.table.context}
          />
        </Wrapper>
      </Loading>
    );
  }
}

Table.propTypes = {
  match: PropTypes.object,
  fetchCompany: PropTypes.func,
  company: PropTypes.object,
  table: PropTypes.object,
  changeTableContext: PropTypes.func,
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
