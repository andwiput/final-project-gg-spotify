import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useAppSelector } from './store';
import LandingPage from './pages/landingPage'
import Header from './components/header';
import CreatePlaylist from './pages/createPlaylist';

function App() {
  const { isAuth } = useAppSelector(state => state.auth)


  return (
    <BrowserRouter>
      <Header />
      <main>
        {/* <Sidebar /> */}
        <Switch>
          <Route exact path="/create-playlist">
            {isAuth ? <CreatePlaylist /> : <Redirect to="/" /> }
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;