import { lazy, useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase';
import Header from './components/header/Header.component';
import { setCurrentUser } from './redux/user/userSlice';
import { AppDispatch, RootState } from './redux/store';
import { selectCurrentUser } from './redux/user/user.select';
import { IUser } from './redux/InterfacesAndTypes';
import ErrorBoundary from './components/ErrorBoundary';

const CommentsPage = lazy(() => import('./pages/comments/CommentsPage.component'));
const SignPage = lazy(() => import('./pages/sign/SignPage.component'));
const UsersPage = lazy(() => import('./pages/users/UsersPage.component'));
const CoinbasePage = lazy(() => import('./pages/coinbase/Coinbase.component'));
const TechnologiesPage = lazy(() => import('./pages/technologies/TechnologiesPage.component'));

function App({ currentUser, setCurrentUser }: IUser) {
  useEffect(() => {
    if (currentUser) {
      return;
    }
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef &&
          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={'Идет загрузка'}>
          <Switch>
            <Route exact path='/'>
              <div></div>
            </Route>
            <Route component={TechnologiesPage} path='/technologies'></Route>
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
            <Route path='*'>
              <div>KEKW</div>
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

const mapStateToProps = (state: RootState) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setCurrentUser: (user: string) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
