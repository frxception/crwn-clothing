import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { auth } from './firebase/firebase.utils'
import './App.css';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignUser from './pages/sign-user/sign-user.component';
import Header from './components/header/header.component';

//NOTE: We convert the functional App to class so that we can access the state
class App extends React.Component {
    
    constructor(props) {
        super (props);
        this.state = {
            currentUser: null
        }
    }
    
    unsubscribeFromAuth = null;
    
    
    componentDidMount() {
        //NOTE: Auth onAuthStateChanged is an open subscription. Thus, we need to also unsubscribe to avoid memory leak
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => { 
            this.setState({ currentUser: user })
            console.log('[ app:componentDidMount ] - currentUser: ', user)
        })
    }
    
    componentWillUnmount() {
        //NOTE: This will unsubscribe firebase auth when component is about to be unmounted
        this.unsubscribeFromAuth()
    }
    
    render() {
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
    
}

export default App;
