import React from 'react';
import Autosuggest from 'react-autosuggest';
import { styles, Wrapper } from './styles';
import { suggestions } from './fakeData';
import { MAX_OF_SUGGESTIONS } from './constants';

import slugify from '../../utils/slugify';

import renderInput from './RenderInput';
import renderSuggestion from './RenderSuggestions';
import renderSuggestionsContainer from './RenderSuggestionsContainer';

const getSuggestionValue = (suggestion) => suggestion.name;

const getSuggestions = (value) =>
  suggestions
    .filter((suggestion) => slugify(suggestion.name).includes(slugify(value)))
    .slice(0, MAX_OF_SUGGESTIONS);

export class SearchInput extends React.PureComponent {
  state = {
    value: '',
    suggestions: [],
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    console.log(Autosuggest);
    return (
      <Wrapper>
        <Autosuggest
          theme={{
            container: styles.container,
            suggestionsContainerOpen: styles.suggestionsContainerOpen,
            suggestionsList: styles.suggestionsList,
            suggestion: styles.suggestion,
          }}
          renderInputComponent={renderInput}
          suggestions={this.state.suggestions}
          onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
          renderSuggestionsContainer={renderSuggestionsContainer}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            placeholder: 'Pratos, bebidas...',
            value: this.state.value,
            onChange: this.handleChange,
            style: styles.searchInput,
          }}
        />
      </Wrapper>
    );
  }
}
