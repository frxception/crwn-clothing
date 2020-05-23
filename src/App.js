import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux'
import {auth, createUserProfileDoc} from './firebase/firebase.utils'
import './App.css';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignUser from './pages/sign-user/sign-user.component';
import Header from './components/header/header.component';
import { setCurrentUser } from "./redux/user/user.actions";

//NOTE: We convert the functional App to class so that we can access the state
class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         currentUser: null
    //     }
    // }

    unsubscribeFromAuth = null;

    componentDidMount() {
        
        const { setCurrentUser } = this.props;
        
        //NOTE: Auth onAuthStateChanged is an open subscription. Thus, we need to also unsubscribe to avoid memory leak
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { //NOTE: user argument is async because we will getting the data from firebase
            if (userAuth) {
                const userRef = await createUserProfileDoc(userAuth);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                    
                    // this.setState({
                    //     currentUser: {
                    //         id: snapShot.id,
                    //         ...snapShot.data()
                    //     }
                    // }, () => { //NOTE: This second arg in set state is a async callback
                    //     console.log('[ app : componentDidMount() ] - state: ', this.state)
                    // })
                    
                });
            } else {
                // this.setState({currentUser: userAuth});
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
                <Header currentUser={this.state.currentUser}/>
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
