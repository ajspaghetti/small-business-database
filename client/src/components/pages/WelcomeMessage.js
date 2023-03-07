import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function WelcomeMessage(
  // currentUser
) {
// const { user } = useContext(UserContext);
// const { currentUser } = useContext(UserContext);

  return (
    <div>
      {/* <h1>Welcome, {user.username}!</h1> */}
    </div>
  );
}

export default WelcomeMessage;