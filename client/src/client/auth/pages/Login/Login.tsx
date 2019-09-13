import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClick = (): void => {
    console.log('clicked');
  };

  return (
    <div>
      <div>
        <span>Username</span>
        <input type="text" value={username} onChange={onUsernameChange} />
      </div>
      <div>
        <span>Password</span>
        <input type="password" value={password} onChange={onPasswordChange} />
      </div>

      <button onClick={onClick}>Log In</button>
    </div>
  );
};

export default Login;
