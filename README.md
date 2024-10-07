# Social Network API

## Description

This project is a RESTful API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friends list. It utilises Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [Demonstration video](#demonstration-video)
- [Questions](#questions)

## Installation

To install the necessary dependencies, run the following command:

```
npm install
```

## Usage

To start the server, run:

```
npm start
```

## API Routes

### /api/users

- GET all users
- GET a single user by its _id and populated thought and friend data
- POST a new user
- PUT to update a user by its _id
- DELETE to remove user by its _id

### /api/users/:userId/friends/:friendId

- POST to add a new friend to a user's friend list
- DELETE to remove a friend from a user's friend list

### /api/thoughts

- GET to get all thoughts
- GET to get a single thought by its _id
- POST to create a new thought
- PUT to update a thought by its _id
- DELETE to remove a thought by its _id

### /api/thoughts/:thoughtId/reactions

- POST to create a reaction stored in a single thought's reactions array field
- DELETE to pull and remove a reaction by the reaction's reactionId value

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose ODM

## Demonstration video
https://github.com/user-attachments/assets/8502fcbd-fb60-4d60-b957-26daf48bf5f7

## Questions

If you have any questions feel free open an issue and you can find more of my work at Jovana667(https://github.com/Jovana667).
