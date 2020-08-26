import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Menu = lazy(() => import('./components/Menu'));
const Home = lazy(() => import('./pages/Home'));
const Fields = lazy(() => import('./pages/Fields'));
const Farms = lazy(() => import('./pages/Farms'));
const Harvests = lazy(() => import('./pages/Harvests'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Route path='/' component={Menu} />
        <Route path='/' component={Home} exact />
        <Route path='/fields' component={Fields} exact />
        <Route path='/farms' component={Farms} exact />
        <Route path='/harvests' component={Harvests} exact />
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
