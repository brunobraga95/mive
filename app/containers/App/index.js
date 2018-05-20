/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

//  NPM imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blueGrey from 'material-ui/colors/blueGrey';
import grey from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';

// Components
import Landing from 'containers/Landing/LoadableLanding';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Table from 'containers/Table/Loadable';
import NavBar from 'containers/Navbar';
// We try our best to provide a great default value.
const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blueGrey,
    error: grey,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            path="/company/:companyId/table/:tableNumber"
            component={Table}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </MuiThemeProvider>
  );
}
