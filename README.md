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

## Solution
I created a simple form with an input and submit button which would take the inputs vallue and add it to the list. 
If the URL entered in the input is a valid url, then the url will be accepted and the user will be taken to the thank you page which is just a conditionally rendered component. The user never leaves the page (single page application) - this goes for the pagination too.
a link on the thank you page removed the boolean value causing that thank you message to show, removing it from sight and showing the form again whilst also emptying the form input, in case it isn't already cleared.

## Todos
* Retain list on page reload
* Validate URL by way of returning a 200 or 404 response

## Limitations
I tried to componentise as much as possible within the time I had and had a bit of an issue with the thankyou component. The link to go back wouldn't respond and with more time, I'd have debugged it and have no doubt i'd have fixed the issue.

I'd also have liked to convert the form into a component in order to keep the App.js file as clean as possible.abs

I found a solution to use the local storage to store the state but didn't manage to get it working and didn't want to waste too much time on it and not complete other aspects of the task. I'd have liked to have implemented this with more time.

I had issue with checking the url/site existed. The solution I intended to use was to use a XMLHttpRequest to check if the site returns a 200 or a 404 but I had fake sites or sites i knew didn't exist returning 200s not returning 404s. I also tried a few npm packages but found that they had either deprecated or just didn't work.

## Running
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
