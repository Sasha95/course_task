import React from 'react';
import { ContentLayout } from './common/components/layouts/ContentLayout';
import { MainLayout } from './common/components/layouts/MainLayout';
import { MenuLayout } from './common/components/layouts/MenuLayout';

function App() {
  return (
    <>
        <MainLayout />
        <ContentLayout>
          <MenuLayout />
        </ContentLayout>
    </>
  );
}

export default App;
