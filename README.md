# alx-backend-javascript

Welcome to the backend for the alx-backend-javascript project! This backend is built using Node.js and Express.js.

## Getting Started

1. Clone the repository: `git clone https://github.com/Dovineowuor/alx-backend-javascript.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

The server will now be running on `http://localhost:3000/`.

## Endpoints

The following endpoints are available:

- `GET /`: A simple welcome message
- `POST /api/login`: A login endpoint that accepts a JSON object with a `username` and `password` field.
- `GET /api/users`: A endpoint that returns a list of all users in the system.
- `GET /api/users/:id`: A endpoint that returns a specific user by their id.
- `POST /api/users`: A endpoint that creates a new user in the system.

## Database

The backend uses MongoDB to store data. Make sure you have MongoDB installed and running on your system before starting the server.

## Deployment

The backend can be easily deployed to a platform like Heroku. Simply push the code to a new Heroku app and configure the app to connect to a MongoDB instance.

## Contribute

If you want to contribute to the project, please follow the below steps

1. Fork the repo
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thank you to the Node.js and Express.js communities for their invaluable resources and support.
- Thanks to the Open source contributors for the modules used in this project.

## Authors
[Dovine Owuor](https://github.com/dovineowuor)
