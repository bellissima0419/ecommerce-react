import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/singin-singup/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class  App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      
      userRef.onSnapshot(snapShot => {
        console.log("snapShot.data(): ", snapShot.data());
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        }, () => console.log('this.state', this.state))

        console.log("snapShot: ", snapShot);

      })
     }  else {
       this.setState( { currentUser: userAuth })
     }
     
      // this.setState({ currentUser: userAuth });
      // console.log('userAuth: ', userAuth);
    })
  }

  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
  //      this.setState({ currentUser: user });
  //      console.log(user);
  //    })
  //  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
