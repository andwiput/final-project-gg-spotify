# GenG Music - Generasi Gigih Final Project

This is my final project to accomplish [#GenerasiGIGIH](https://sites.google.com/anakbangsabisa.org/generasigigih-landingpage/home?authuser=1). This app use Spotify API to create playlist in Spotify Account.

## Screenshots

<center><img src="/images/screenshotgg1.png" alt="Preview Image" /></center>

## Features

- 🎼 You can create playlist with your favorite songs
- ☀🌙 Switch Light/Dark Mode 
- 🎵 You can see new releases songs

## Run on Local

- Clone the project

  git clone https://github.com/andwiput/final-project-gg-spotify

- Go to the project directory

  ```bash
    cd generasi-gigih-final-project
  ```

- Install dependencies

  ```bash
    yarn
  ```

- Set up the [environment variables](#environment-variables)

- Start the server

  ```bash
    yarn start
  ```

- Open http://localhost:3000 with your browser to see the result.

## Environtment Variables

- `REACT_APP_SPOTIFY_CLIENT_ID` contains Spotify Client ID
-  `REACT_APP_URL` contains the app Base URL e.g. https://localhost:3000/

## Powered by

- [Create React App](https://create-react-app.dev/) to initialize the project with 
- [TypeScript](https://typescriptlang.org)
- [React Redux](https://react-redux.js.org/) to manage the app state.
- [Chakra-ui](https://chakra-ui.com/docs/getting-started) to build the user interface.
- [Jest](https://jestjs.io/) & [react testing-library](https://testing-library.com/) to test the UI and implementation. 
- Hosted on [Vercel](https://vercel.com/).