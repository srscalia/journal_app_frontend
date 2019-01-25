# Journaling App (Frontend)

**Demo**: https://www.youtube.com/watch?v=Rew72U8tiRs

A safe place for your thoughts. An online journaling app. 

Users log in or sign up to create account with the app. Users create different themed journals where they can add entries with or without media. Users can view photos from each journal or all journals in the photo gallery feature. 

## Getting Started

This is the frontend repository for this project. To run this app on your local machine you must have the frontend and backend repos. For backend instructions, see [README.md](https://github.com/srscalia/journal_app_backend). For frontend instructions, see the following:

  * Clone this repo down to your local machine. 
  * In the repository, run `npm install`.
  * Run ` npm start`. (If prompted to run on different port, select yes. Open [http://localhost:3001](http://localhost:3001) to view it in the browser.)
  
These instructions will get you a copy of the frontend for the project up and running on your local machine for development purposes. Both the backend and frontend will need to be running for this software to work.

### Prerequisites

Things you need to install the software and how to install them:

  * [node](https://nodejs.org/en/) - an environment for developing server-side applications; used to instal npm
  * [npm](https://docs.npmjs.com/) - package manger for JavaScript 
  * [Cloudinary](https://cloudinary.com/) -  a comprehensive cloud-based image and video management platform.

#### Cloudinary

You will need to [create a Cloudinary account](https://cloudinary.com/users/register/free) to allow for uploads. Once you create an account,  go to Settings, go to Upload, and add an Upload Preset. In your repository, create an `.env` file and add your `REACT_APP_CLOUD_NAME=’string’` and `REACT_APP_UPLOAD_PRESET=’string’` to the file. Be sure to add the `.env` file to the `.gitignore` file.

## Running the tests

Currently there are no tests for this system.

## Built With

  * [React](https://reactjs.org/docs/getting-started.html) - JavaScript library for building user interfaces
  * [React Redux](https://redux.js.org/basics/usage-with-react) - a predictable state container for JavaScript apps
  * [Cloudinary’s upload widget](https://cloudinary.com/documentation/upload_widget) -  a comprehensive cloud-based image and video management platform.
  * [Semantic](https://semantic-ui.com/) - development framework that helps create beautiful, responsive layouts using human-friendly HTML

## Contributing

Please message owner of repository, Shelby Scalia, for details on the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/srscalia/kitty_kard_backend/tags). 

## Authors

**Shelby Scalia** - *Initial work*

## License

N/A

## Acknowledgments

Thank you Flatiron School for the support during this project’s creation. 

