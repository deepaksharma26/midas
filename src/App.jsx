import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <Router>
      <Suspense fallback={<div style={{textAlign:'center',marginTop:'20vh'}}><span className="spinner-border" role="status"></span><br/>Loading...</div>}>
        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
