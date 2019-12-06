import React, {Component} from 'react';
import {GlobalStyle} from "./style";
import Header from './common/header'
import {Provider} from 'react-redux'
import {store} from './store'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <GlobalStyle/>
                    <Header/>
                    <BrowserRouter>
                        <Switch>
                            <Route path={'/'} component={Home}/>
                            <Route path={'/detail'} component={Detail}/>
                        </Switch>
                    </BrowserRouter>

                </div>
            </Provider>
        );
    }
}

export default App;

