import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FullCourse } from './common/components/course/components/full/FullCourse';
import { ContentLayout } from './common/components/layouts/ContentLayout';
import { EmptyComponent } from './common/components/layouts/EmptyComponent';
import { MainLayout } from './common/components/layouts/MainLayout';
import { MenuLayout } from './common/components/layouts/MenuLayout';

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
