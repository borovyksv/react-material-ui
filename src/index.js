import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "./styles.css";
import {createMuiTheme} from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducers";

const theme = createMuiTheme({
  palette: {type: 'dark'},
  typography: {useNextVariants: true},
});

const rootElement = document.getElementById("root");
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App/>
    </MuiThemeProvider>
  </Provider>,
  rootElement);
