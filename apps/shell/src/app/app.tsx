import React, { Suspense } from 'react'
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
const RemoteEntry = React.lazy(() => import('remote/RemoteEntry'))

export function App() {
  return (
    <>
      {/* This isn't working */}
      {/*<Suspense fallback={<div>Loading !!!!!!!!!!!!</div>}>*/}
      {/*  <RemoteEntry />*/}
      {/*</Suspense>*/}
      <NxWelcome title="shell" />

      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
