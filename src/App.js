import React from 'react';

import LoginButton from './components/LoginButton.js';
import LogoutButton from './components/LogoutButton.js';
import Profile from './components/Profile.js';

function App() {
  return (
    <>
      <div className='text-center'>
        <LoginButton />
        <LogoutButton/>
        <Profile/>
      </div>
    </>
  );
}

export default App;
