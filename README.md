
 ![PhotoLabs Logo](https://github.com/rishadsanian/photolabs/blob/main/docs/logo.png?raw=true)
<br>

## Overview

PhotoLabs is an image-sharing and viewing platform. 

Using a cloned starter repo, PhotoLabs has been constructed using NODE with CSS/SCSS and REACT in the front-end, and with EXPRESS and PSQL for back-end.

This project has been completed by [Rishad Alam](https://github.com/rishadsanian) for the [Lighthouse Labs](https://www.lighthouselabs.ca/) Web Development Bootcamp.

The goal of the project was to build a client-side application using the React view-layer library.

<br>

## Table of Contents

- [Overview](#overview)
- [Project Requirements](#project-requirements)
- [Features](#features)
- [Demo](#demo)
- [Images](#images)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Future Features](#future-features)

## Project Requirements

### Functional Requirements
- The client-side consists of the development of a React single page application (SPA) called PhotoLabs
- The data layer consists of PostgreSQL database
- The API server consists of a Node Express.js server application
- The server/persistence layer may require modifications for stretch goals
- The client will communicate with the API over HTTP using the JSON format

### Behavioral Requirements
- A user can view photos from the homepage loaded from the API.
- The user can navigate to different photo categories, also called topics.
- The user can click on a photo to view a larger version of the photo and relevant/similar photos.
- The user can like a photo from anywhere within the application where the photo is displayed.
- The user can view a heart icon with a notification in the navigation if there are liked photos.
- The navigation will consist of different topics and heart icon.
- The client-side application will make API requests to load and persist data (i.e. relevant data is not lost after a session restarts, so after a browser refresh).

### Out-of-scope additional improvements
- Enhanced UI/UX features include scrollbar customization, micro-interactions, scroll animations, ability to see all photos. 
## Features
- Responsive, interactive and dynamic React application
- Asynchronous connectivity between client and server-side through proxy setup
- Custom SCSS micro-interactions, state management, and enhanced UX features including modal, saving favourite photos, displaying notification alerts, hover, and scroll effects.
- Ability to see all photos, photos by category, favourite photos, and related photos

<br>


## Demo

[Animated Demo](https://github.com/rishadsanian/photolabs/blob/main/docs/photolabs_animation.gif?raw=true)

![Animation of PhotoLabs App](https://github.com/rishadsanian/photolabs/blob/main/docs/photolabs_animation.gif?raw=true)

<br>

## Images

![Screenshot of Homepage](https://github.com/rishadsanian/photolabs/blob/main/docs/photolabs_homepage.png?raw=true)

<br>

![Screenshot of Modal and Fav Button](https://github.com/rishadsanian/photolabs/blob/main/docs/photolabs_modal.png?raw=true)

<br>

![Screenshot of Notification Icon](https://github.com/rishadsanian/photolabs/blob/main/docs/photolabs_notification.png?raw=true)


<br>

![Screenshot of Favourite Photos](https://github.com/rishadsanian/photolabs/blob/main/docs/photolabs_favourites.png?raw=true)


<br>

## Getting Started

To get started, install all dependencies for backend and server and start the frontend and backend server.

  - For more information on backend setup have a look at the README.md on `./backend`
  - For more information on frontend setup have a look at the README.md on `./frontend`



### Setup

- Install dependencies with `npm install` in each respective `/frontend` and `/backend`

- Setup PSQL by creating and seeding the database in the backend



- Run Backend Server [Default port: 8001]

```sh
cd backend
npm start
```

- Run Webpack Development Server [Default port: 3000]

```sh
cd frontend
npm start
```

 <br>
 
## Dependencies
- Node 16 or above
- PSQL version 8.5
- Express version 4.16
- Body-parser
- Cors
- Dotenv
- Helmet
- Socket
- Ws
- Jest
- Supertest
- React version 18.2
- Axios
- Sass version 1.59
- Web-vitals version 2.1

## Future Features
- Search Bar
- Add Photo
- Dark Mode

