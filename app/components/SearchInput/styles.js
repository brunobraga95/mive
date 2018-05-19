import styled from 'styled-components';
import red from 'material-ui/colors/red';
import grey from 'material-ui/colors/grey';

export const Wrapper = styled.div`
  text-align: center;
  margin: 1rem;
  height: 3rem;
`;

export const TypedValue = styled.span`
  font-weight: 500;
`;

export const NoTypedValue = styled.span`
  font-weight: 300;
`;

export const IconContainer = styled.span`
  color: ${red[500]};
`;

export const styles = {
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 250,
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: 0,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  searchInput: {
    borderRadius: 4,
    backgroundColor: grey[200],
    padding: '10px 12px',
  },
  searchRoot: {
    padding: 0,
  },
};
