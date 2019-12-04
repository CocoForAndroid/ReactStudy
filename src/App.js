import React, {Component} from 'react';
import {GlobalStyle} from "./style";
import Header from './common/header'
import {Provider} from 'react-redux'
import {store} from './store'
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <GlobalStyle/>
                    <Header/>
                </div>
            </Provider>
        );
    }
}

export default App;
