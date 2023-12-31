import React from 'react';
// import { useSelector } from 'react-redux';
import AuthenticationBtn from '../authentication/AuthenticationBtn';

export default function Dashboard() {
  const [heartRateData, setHeartRateData] = React.useState(null);
  const accessToken = localStorage.getItem('accessToken');
  const userId = localStorage.getItem('userId');

  // This is a demonstration for requesting data scopes
  // Could for fetching should be placed in a separate file.
  React.useEffect(() => {
    const apiUrl = `https://api.fitbit.com/1/user/${userId}/activities/heart/date/today/1m.json`;

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
    };

    fetch(apiUrl, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        setHeartRateData(data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      });
  }, [accessToken]); // The dependency array ensures the effect runs when the access token changes

  console.log(heartRateData);

  return (
    <div className="dark:bg-slate-800">
      <h1 className="grid h-screen place-items-center">
        {accessToken === null && <AuthenticationBtn />}
        {accessToken !== null && <div>Authenticated with {accessToken}</div>}
      </h1>
    </div>
  );
}
