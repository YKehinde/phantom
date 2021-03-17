# Developer Brief (front end) - https://docs.google.com/document/d/18YdAZcKvISYN6xOpCZktPRUCHR2JvdKgBhsy761vEg8/preview#

## App brief
* Develop a JavaScript web app that maintains a list of bookmarks (links). The user is able to add/edit/delete any link in the list.  * The application should only use front-end technologies (ie no backend database!).

## Flow
### Overview page 
* Displays a form on the top of the page that lets a user submit a link. The form should validate whether the input is a valid URL and exists.
* Displays the a list of links with pagination so 20 links are shown per page. 
* The pagination should include numbered pagination with next and previous links eg. < 1 2 3 >.

### Results page
* Contains a message thanking the user for a submission.
* Displays the user’s submission.
* Includes a link back to the overview page.

### Technologies to use
Basic layout (HTML/CSS).
Pure JavaScript or React if preferred

## Deliverables
* Form validation must be custom written.
* All links entered in the list must persist page reload.
* Where applicable, all code should follow the Google style guidelines.
* All code should be commented.
* The application should be accompanied by a brief TDD (Technical Design Document) outlining the solution’s design and any limitations.
* Source code to be linked to a repository (private or public).
* A public link to the final app.
* Feel free to add any additional features that further demonstrates your skills.

## Bonus points
All JavaScript should be compiled into a single minified file using the Google Closure Compiler (using the command line compiler) with advanced optimisations. 

## Links/Resources
* Google HTML/CSS Style Guide
* JavaScript Style Guide
* Google Advanced Compilation Guide

## Contacts / Questions
If you have any questions regarding the brief please feel free to contact:

John Chipps-Harding
john.chipps-harding@phntms.com

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
