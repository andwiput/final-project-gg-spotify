import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useAppSelector } from './store';
import Header from './components/header';
import Sidebar from './components/sideBar';
import LandingPage from './pages/landingPage'
import Home from './pages/home';
import CreatePlaylist from './pages/createPlaylist';
import { Grid } from '@chakra-ui/layout';

function App() {
  const { isAuth } = useAppSelector(state => state.auth)


  return (
    <BrowserRouter>
      <Header />
      <Grid 
        as={'main'} 
        templateColumns= {isAuth ? '1fr 4fr' : '1fr'}>
        {isAuth && <Sidebar />}
        <Switch>
          <Route exact path="/home">
            {isAuth ? <Home /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/create-playlist">
            {isAuth ? <CreatePlaylist /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Grid>
    </BrowserRouter>
  );
}

export default App;