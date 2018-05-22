import React from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { MenuItem } from '@material-ui/core/Menu';

import { TypedValue, NoTypedValue } from './styles';

export default function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map(
          (part, index) =>
            part.highlight ? (
              <TypedValue key={String(index)}>{part.text}</TypedValue>
            ) : (
              <NoTypedValue key={String(index)}>{part.text}</NoTypedValue>
            )
        )}
      </div>
    </MenuItem>
  );
}
