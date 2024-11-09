#  node-app-manager

Node.js application for task management, structured to be lightweight and scalable. Provides a RESTful API for creating, reading, updating and deleting tasks, using good development practices to ensure a modular and efficient architecture.

Main Resources

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.

- **Express**: Web framework for Node.js, making it easier to create APIs.

- **MongoDB**: NoSQL database for storing tasks.

- **Mongoose**: ODM library for modeling data with MongoDB.

## Features

- Creating tasks
- Listing tasks
- Updating tasks
- Deleting tasks

## Prerequisites

Before you begin, you need to have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/reisfj/nodejs_application.git
```

2. Navigate to the project directory:
```bash
cd nodejs_application
```

3. Install the dependencies:
```bash
npm install
```

4. Set the environment variables (e.g. `.env`):
```bash
PORT=3000
MONGO_URI='your_mongodb_uri'
```

5. Start the application:
```bash
npm start
```

## Usage

The API is available at `http://localhost:3000/api/tasks`. You can use tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to interact with the API.

### Endpoint Examples

- **GET /api/tasks**: Lists all tasks.
- **POST /api/tasks**: Creates a new task.
- **PUT /api/tasks/:id**: Updates an existing task.
- **DELETE /api/tasks/:id**: Deletes a task.

## Features Checklist + Challenges

- Web API
    - [X] it should have an endpoint for storing heroes' data
    - [X] it should have an endpoint for retrieving heroes' data
    - [ ] it should have an endpoint for updating heroes' data
    - [ ] it should have an endpoint for deleting heroes' data
    

- Testing
    - Unit
        - [ ] it should test when the application throws an error
        - [X] it should test all files on the routes layer
        - [ ] it should test all files on the repositories layer
        - [ ] it should test all files on the factories layer
        - Plus
          - [ ] it should reach 100% code coverage (it's currently not possible to get code coverage metrics using only the native Node.js, see [c8](https://www.npmjs.com/package/c8) for this task)

    - Integration / E2E
        - [X] it should test the endpoint for storing heroes' data
        - [ ] it should test the endpoint for retrieving heroes' data
        - [ ] it should test the endpoint for updating heroes' data
        - [ ] it should test the endpoint for deleting heroes' data
        - [ ] it should test when the application throws an error
