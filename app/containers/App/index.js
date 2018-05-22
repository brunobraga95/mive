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
<<<<<<< HEAD
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
=======
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import NavigationButton from 'components/NavigationButtom';
import blueGrey from 'material-ui/colors/blueGrey';
import grey from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';
>>>>>>> [CHANGE] navigation to /app

// Components
import Landing from 'containers/Landing/LoadableLanding';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Table from 'containers/Table/Loadable';
import Bill from 'containers/Bill/Loadable';
import NavBar from 'containers/Navbar';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blueGrey,
    error: grey,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default function App(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/company/:companyId/table/:tableNumber"
            component={Table}
          />
          <Route
            path="/company/:companyId/table/:tableNumber/bill-info"
            component={Bill}
          />
          <Route component={NotFoundPage} />
        </Switch>
        <NavigationButton />
      </div>
    </MuiThemeProvider>
  );
}
