import buildClient from '../api/build-client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const LandingPage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);
  useEffect(async() => {
    const { data } = await axios.get('/api/users/currentuser');
    setCurrentUser(data.currentUser);
  }, []);
    
  
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

// LandingPage.getInitialProps = async context => {
//   const client = buildClient(context);
//   const { data } = await client.get('/api/users/currentuser');

//   return data;
// };
export default LandingPage;
