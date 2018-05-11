This is a small React application that uses Mapbox with the Foursquare API. 
The user grants access to his/her location and the map is populated with venues near the him/her.
Used React as the rendering library. 
This app is small enough thus simple state management is sufficient.

## Local Setup

- Pre-requisites: Node 8 (LTS), Foursquare API keys, Mapbox API keys.

- Clone this repo

- Rename `./src/config.js.example` to `./src/config.js`

- Update config:
    - Enter `foursquare api` details: `client_id`, `client_secret`, `version`
    - Enter `mapbox api` details: `token`

- Install yarn globally `npm i -g yarn`

- Install dependencies `yarn`

- Start the app `yarn start`

- Check out `http://localhost:3000`

## Screenshots

![start screen](https://i.imgur.com/GiySJGP.png)
![geolocation denied](https://i.imgur.com/Fbcu3hP.png)
![venues](https://i.imgur.com/BWuLCi9.png)
![selected venue](https://i.imgur.com/GUpYBa1.png)
![reduced radius](https://i.imgur.com/ciPFbRy.png)
