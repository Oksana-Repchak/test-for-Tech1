import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Wrapper from './components/Wrapper';
import AppBar from './components/AppBar';

// import DashboardView from './views/DashboardView';
// import InstancesView from './views/InstancesView';
// import PairsView from './views/PairsView';
// import AboutView from './views/AboutView';
// import HelpView from './views/HelpView';
// import ContactView from './views/ContactView';
// import NotFoundView from './views/NotFoundView';

const DashboardView = lazy(() =>
  import('./views/DashboardView' /* webpackChunkName: "DashboardView" */),
);

const InstancesView = lazy(() =>
  import('./views/InstancesView' /* webpackChunkName: "InstancesView" */),
);

const PairsView = lazy(() =>
  import('./views/PairsView' /* webpackChunkName: "PairsView" */),
);

const AboutView = lazy(() =>
  import('./views/AboutView' /* webpackChunkName: "AboutView" */),
);

const HelpView = lazy(() =>
  import('./views/HelpView' /* webpackChunkName: "HelpView" */),
);

const ContactView = lazy(() =>
  import('./views/AboutView' /* webpackChunkName: "ContactView" */),
);

const NotFoundView = lazy(() =>
  import('./views/AboutView' /* webpackChunkName: "NotFoundView" */),
);

function App() {
  return (
    <Wrapper>
      <AppBar />
      <Suspense fallback={<h1>Download...</h1>}>
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
      </Suspense>

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
