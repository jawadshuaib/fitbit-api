# Fitbit API for OAuth Authentication

Fitbit requires an OAuth handshake. I have created a boilerplate React app to template this process.

Here is the process it follows:

-> Request for authentication is made from the Dashboard component to Fitbit

-> Fitbit returns back a payload "code" to OAuthCallback component

-> This payload is then sent back to Fitbit via netlify serverless functions.

-> Fitbit verifies this payload, and sends a token back to the React app (i.e. client)

The token returned back from Fitbit can then be used to make API calls on behalf of the user.

Documentation for the Web API can be read here: https://dev.fitbit.com/build/reference/web-api/

You will need to register your app on Fitbit. Head over to https://dev.fitbit.com/

## Try it out

### Install the dependencies

    $ npm install

### Run & Start Testing

    $ npm run dev
