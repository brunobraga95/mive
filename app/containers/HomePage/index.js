import React from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import NavigationButton from 'components/NavigationButtom/NavigationButton';
import SearchInput from 'components/SearchInput';

class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dummy: null,
    };
  }
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <SearchInput />

        <NavigationButton />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(HomePage);
