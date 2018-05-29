import React from 'react';
import PropTypes from 'prop-types';
import { styles, Wrapper } from './styles';
import slugify from '../../utils/slugify';

import RenderInput from './RenderInput';

export class SearchInput extends React.PureComponent {
  handleChange = (event) => {
    this.props.handleChange(event.target.value);
  };

  render() {
    const { value } = this.props;
    return (
      <Wrapper>
        <RenderInput
          placeholder="Pratos, bebidas..."
          value={value}
          onChange={this.handleChange}
          style={styles.searchInput}
        />
      </Wrapper>
    );
  }
}

SearchInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
