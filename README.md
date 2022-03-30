# Architecture

This repository contains two components:
* the **client**, which provides a client for car listing ([Deployed on Netlify](https://car-listing-umut.netlify.app/))
* the **server**, which provides the API to manage car listing([Repo](https://github.com/barisarabasuren/car_listing_server))([Deployed on Heroku](https://guarded-caverns-65239.herokuapp.com/))
* the **database**, MongoDB that connects local cLuster in development environment and connects MongoDB Atlas on deployed API

### High-Level Overview
![Architecture](./architecture.jpeg?raw=true)

# Backend

### Techstack
The entire backend of url shortener is written using:
- [node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/try/download/community)


Extra libraries used were:
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [uuid](https://github.com/uuidjs/uuid/)

### Installation
Requirements:
* [node.js](https://nodejs.org/en/)
* [MongoDb](https://www.mongodb.com/try/download/community)

To run the backend service you have to clone the repository:
```zsh
git clone https://github.com/barisarabasuren/car_listing_server
cd ./car_listing_server
npm install
npm run start
```
# Frontend

### Techstack
The entire backend of url shortener is written using:
- [create-reat-app](https://create-react-app.dev/)


Extra libraries used were:
- [Ant Design](https://ant.design/)

### Installation

To run the frontend service you have to clone the repository:
```zsh
git clone https://github.com/barisarabasuren/car_listing_client
cd ./car_listing_client
npm install
npm start
```
