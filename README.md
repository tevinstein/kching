# kching

![kching logo](http://i.imgur.com/0HV73sZ.png "kching logo")

##### kching is Tevinstein's submission for a Hacktiv8 portfolio project with
- Node.js 6+
- Express
- MongoDB
- Passport & passport-local

## Installation
- Clone the repo: `git clone https://github.com/tevinstein/kching.git`
- Install packages: `npm install`
- Create a new file called .env and insert your MongoDB URI in the variable: `URI="insert_your_db_uri_here"`
- Start the server: `npm run dev`
- View in browser: `http://localhost:3000`

## REST API
| URL     | Method | Description         |
|---------|--------|---------------------|
| /       | GET    | Renders Homepage    |
| /login  | GET    | Shows Login Form    |
| /login  | POST   | Checks User Login   |
| /signup | GET    | Shows Sign Up Form  |
| /signup | POST   | Checks User Sign Up |
| /home   | GET    | Shows User Profile  |
| /logout | GET    | Logout User         |

## Screenshots

![kching index page](http://i.imgur.com/eGJvHNu.png "kching index page")

![kching sign up page](http://i.imgur.com/ZeWWzjJ.png "kching sign up page")

![kching profile page](http://i.imgur.com/LmrUKY3.png "kching profile page")