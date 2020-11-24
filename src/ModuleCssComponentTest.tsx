import React from 'react';
import styles from './ModuleCssComponent.module.css';

export const ModuleCssComponentTest: React.FC = () => {
  return (
      <div className={styles.test}>
         <h1>Module class based component go</h1>
      </div>
   );
};