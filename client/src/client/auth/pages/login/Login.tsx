import * as React from 'react';

import * as styles from './styles.css';

const Login: React.FC = () => {
    const copy = 'Djordje Vukovic';
    return <div className={styles.component}>{copy}</div>;
};

export { Login };
