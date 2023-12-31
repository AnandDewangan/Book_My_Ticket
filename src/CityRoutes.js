import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainHome from './Components/MainHome';
import NewYork from './Components/NewYork';
import AppStore from './Components/AppStore';

const CityRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainHome} />
      <Route exact path="/cities/new-york" component={NewYork} />
      <Route exact path="/cities/las-vegas" component={NewYork} />
      <Route exact path="/cities/rome" component={MainHome} />
      <Route exact path="/cities/paris" component={NewYork} />
      <Route exact path="/cities/london" component={NewYork} />
      <Route exact path="/cities/dubai" component={MainHome} />
      <Route exact path="/cities/barcelona" component={NewYork} />
      <Route exact path="/cities/madrid" component={NewYork} />
      <Route exact path="/cities/singapore" component={MainHome} />
      <Route exact path="/cities/venice" component={NewYork} />
      <Route exact path="/cities/milan" component={NewYork} />
      <Route exact path="/cities/naples" component={NewYork} />
      <Route exact path="/cities/budapest" component={NewYork} />
      <Route exact path="/cities/edinburg" component={MainHome} />
      <Route exact path="/cities/florence" component={NewYork} />
      <Route exact path="/app" component={AppStore} />
    </Switch>
  </BrowserRouter>
);

export default CityRoutes;
