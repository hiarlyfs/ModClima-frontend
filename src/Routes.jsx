import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Menu = lazy(() => import('./components/Menu'));
const Home = lazy(() => import('./pages/Home'));
const Fields = lazy(() => import('./pages/Fields'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Route path='/' component={Menu} />
        <Route path='/' component={Home} exact />
        <Route path='/fields' component={Fields} exact />
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
