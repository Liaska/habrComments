import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase';

import CommentsPage from './pages/comments/CommentsPage.component';
import SignPage from './pages/sign/SignPage.component';
import UsersPage from './pages/users/UsersPage.component';
import CoinbasePage from './pages/coinbase/Coinbase.component';
import Header from './components/header/Header.component';

import { setCurrentUser } from './redux/user/userSlice';

import { createBrowserHistory } from 'history';
import TechnologiesPage from './pages/technologies/TechnologiesPage.component';
import { AppDispatch } from './redux/store';

const history = createBrowserHistory();

interface IApp {
  setCurrentUser: Function
}

function App({ setCurrentUser }:IApp) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef && userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path='/'>
          <div></div>
        </Route>
        <Route component={TechnologiesPage} path='/technologies'>
        </Route>
        <Route exact path='/users'>
          <UsersPage></UsersPage>
        </Route>
        <Route exact path='/coinbase'>
          <CoinbasePage></CoinbasePage>
        </Route>
        <Route exact path='/comments'>
          <CommentsPage />
        </Route>
        <Route exact path='/sign'>
          <SignPage></SignPage>
        </Route>
      </Switch>
    </Router>
  );
}

const mapDispatchToProps = (dispatch:AppDispatch) => ({
  setCurrentUser: (user:string) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
