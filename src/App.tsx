import React from 'react';
import './App.css';
import { ModuleCssComponentTest } from './ModuleCssComponentTest';
export const App: React.FC = () => {
  return (
   <React.StrictMode>
      <div className="app">
         <h1>Hi React idemo</h1>
         <ModuleCssComponentTest/>
      </div>
   </React.StrictMode>
   );
};