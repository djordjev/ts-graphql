import * as React from 'react';

import * as styles from './styles.css';

const Login: React.FC = () => {
  const copy: string = 'Djordje Vukovicd';
  return <div className={styles.component}>{copy}</div>;
};

export { Login };
