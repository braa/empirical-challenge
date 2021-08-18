import React, { FunctionComponent } from 'react';
import './App.css';
import Dashboard from './layout/Dashboard';
import { worker } from './mocks/browser';

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

const App: FunctionComponent = () => (
    <div className="App">
      <Dashboard/>
    </div>
  );

export default App;
