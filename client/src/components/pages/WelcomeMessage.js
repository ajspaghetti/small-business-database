import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function WelcomeMessage(
  //  currentUser
) {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome, {currentUser.username}!</h1>
    </div>
  );
}

export default WelcomeMessage;