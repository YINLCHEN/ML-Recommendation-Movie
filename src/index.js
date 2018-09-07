import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './components/LoginPage/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Microsoft JhengHei'
        ].join(',')
    }
});

ReactDOM.render(
    <Router>
        <MuiThemeProvider theme={theme}>
            <LoginPage />
        </MuiThemeProvider>
    </Router>, document.getElementById('root'));
registerServiceWorker();
