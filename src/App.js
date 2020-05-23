import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {auth, createUserProfileDoc} from './firebase/firebase.utils'
import {setCurrentUser} from "./redux/user/user.actions";

import './App.css';

import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignUser from './pages/sign-user/sign-user.component';
import Header from './components/header/header.component';

//NOTE: We convert the functional App to class so that we can access the state
class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {

        const {setCurrentUser} = this.props;

        //NOTE: Auth onAuthStateChanged is an open subscription. Thus, we need to also unsubscribe to avoid memory leak
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { //NOTE: user argument is async because we will getting the data from firebase
            if (userAuth) {
                const userRef = await createUserProfileDoc(userAuth);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                });
            } else {
                //NOTE: In case theres no user auth found then we just set whatever value of userAuth
                setCurrentUser(userAuth)
                console.log('[ app : componentDidMount() ] - userAuth is null set state: ', this.state)
            }
        })
    }

    componentWillUnmount() {
        //NOTE: This will unsubscribe firebase auth when component is about to be unmounted
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/signIn' 
                           render={ 
                               ()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignUser />) 
                           } 
                    />
                </Switch>
            </div>
        );
    }

}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)) //NOTE: user is the payload
})

//NOTE: We get the current user from the redux state which is the mapStateToProps and pass as a state first arg in connect
export default connect(mapStateToProps, mapDispatchToProps)(App);
