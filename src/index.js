import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Redirect,Switch} from "react-router-dom";
import './assets/css/index.css';

//引入组件  登录页和 内容页
import App from './App';
import login from './login'


import { Provider } from 'react-redux' //react-redux数据的管理 与redux的包又不一样
import store from './store'  //store

const AppStore=(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/login' component={login}/>
                <Route path='/index' component={App}/>
                <Route to='/' component={login} />
            </Switch>   
        </Router>
    </Provider>
)
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(AppStore, document.getElementById('root'));
// serviceWorker.unregister();
