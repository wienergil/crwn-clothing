import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx'
import {Route, Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx'
import {createUserProfileDocument, auth} from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser} from './redux/user/user.actions'


class App extends React.Component{
  
  unsubscribeFromAuth = null;



  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
            });
          });
        }
      setCurrentUser(userAuth);
    });
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render() {
    return(
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/signin' component={SignInSignUp} />

      </Switch>
    </div>
  
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(null, mapDispatchToProps)(App);
