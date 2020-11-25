import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FullCourse } from './modules/course/components/full/FullCourse';
import { ContentLayout } from './layouts/ContentLayout';
import { EmptyComponent } from './layouts/EmptyComponent';
import { MainLayout } from './layouts/MainLayout';
import { MenuLayout } from './layouts/MenuLayout';

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
      <ContentLayout>
        <Switch>
          <Route exact path="/home">
            <MenuLayout />
          </Route>
          <Route path={"/home/:id"}>
            <FullCourse />
          </Route>
          <Route path="/">
            <EmptyComponent />
          </Route>
        </Switch>
      </ContentLayout>
    </BrowserRouter>
  );
}

export default App;
