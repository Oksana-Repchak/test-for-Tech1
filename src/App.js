import { Switch, Route } from 'react-router-dom';

import Wrapper from './components/Wrapper';
import AppBar from './components/AppBar';
import DashboardView from './views/DashboardView';
import InstancesView from './views/InstancesView';
import PairsView from './views/PairsView';
import AboutView from './views/AboutView';
import HelpView from './views/HelpView';
import ContactView from './views/ContactView';
import NotFoundView from './views/NotFoundView';

function App() {
  // state = {
  //   value: '',
  // };

  // handleChange = e => {
  //   this.setState({ value: e.target.value });
  // };

  return (
    <Wrapper>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <DashboardView />
        </Route>

        <Route path="/instances">
          <InstancesView />
        </Route>

        <Route path="/pairs">
          <PairsView />
        </Route>

        <Route path="/about">
          <AboutView />
        </Route>

        <Route path="/help">
          <HelpView />
        </Route>

        <Route path="/contact">
          <ContactView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>

      {/* <Switch>
        <PublicRoute path="/" exact>
          <HomeView />
        </PublicRoute>

        <PublicRoute path="/register" restricted redirectTo="/contacts">
          <RegisterView />
        </PublicRoute>

        <PublicRoute path="/login" restricted redirectTo="/contacts">
          <LoginView />
        </PublicRoute>

        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactsView />
        </PrivateRoute>
      </Switch> */}
    </Wrapper>
  );
}

export default App;
