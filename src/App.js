import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignUser from './pages/sign-user/sign-user.component';
import Header from './components/header/header.component';

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/signIn' component={SignUser}/>
            </Switch>
        </div>
    );
}

export default App;
