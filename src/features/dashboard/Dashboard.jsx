import React from 'react';
// import io from 'socket.io-client';

// import { useSelector } from 'react-redux';
import AuthenticationBtn from '../authentication/AuthenticationBtn';

export default function Dashboard() {
  const accessToken = localStorage.getItem('accessToken');

  return (
    <div className="dark:bg-slate-800">
      <h1 className="grid h-screen place-items-center">
        {accessToken === null && <AuthenticationBtn />}
        {accessToken !== null && <div>Authenticated with {accessToken}</div>}
      </h1>
    </div>
  );
}
