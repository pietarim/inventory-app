# Inventory App

Application is used to keep track of devices and issue devices for use in different departments employees.

Application has development data seeding that will reset to same data when it is run.

## Installation and set up

In order to install project open it in its root directory and do the following commands:

`cd client && npm install`
`cd ../server && npm install`

Add .env to root of `/server` directory:

`PORT=<YOUR_PORT>`
`DB_URI=<YOUR_CONNECTION_STRING_TO_MONGODB>`
`CLIENT_URL=<YOUR_CLIENT_URL>`

## Run app

In order to run the server with nodemon run:

`cd server && npm run run:dev`

Or with node, run:

`cd server && node index.js`

In order to run the client in development mode open new terminal console tab and run:

`cd client && npm run dev`

Client will run at: http://localhost:5173

## Seeding development data

Seeding development data resets data when run:

`cd server && npm run seed`
