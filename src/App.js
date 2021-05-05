import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase';

import CommentsPage from './pages/comments/CommentsPage.component';
import SignPage from './pages/sign/SignPage.component';
import UsersPage from './pages/users/UsersPage.component';
import Header from './components/header/Header.component';

import { selectCurrentUser } from './redux/user/user.select';
import { setCurrentUser } from './redux/user/userSlice';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App({ setCurrentUser }) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
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
    <BrowserRouter history={history}>
      <Header />
      <Switch>
        <Route exact path='/'>
          <div>фывфы</div>
        </Route>
        <Route exact path='/about'></Route>
        <Route exact path='/users'>
          <UsersPage></UsersPage>
        </Route>
        <Route exact path='/comments'>
          <CommentsPage />
        </Route>
        <Route exact path='/sign'>
          <SignPage></SignPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state, state.user),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
