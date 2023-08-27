# Email Client App

## App Features

- The app features an email list page. This page shows the list of emails sent to a user.
- Clicking on any email item in the list splits the screen into a master-slave (left-right) screen type where the master (left) shows the email list (with the selected email item) while the slave (right) shows the body of the email.
- The body of the email is not known ahead of time and is loaded only when the email item is clicked.
- The app allows any particular email item to be marked as “favorite”, it is done via clicking on an email item and then clicking the “Mark as Favorite” button in the email body section.
- The app shows read and unread mails in different CSS styles to distinguish between the same.
- Allow filtering emails by “favorites”, “read” and “unread”.

![Email Client App](/src/images/EmailApp.png)

## Additional Features

- It Render all emails page using the API
- Each email have from, subject, short description, date and time. 
- The avatar (circular logo) in each email item is populated with the first character of first name (sent in API response).
- Upon clicking a particular email, the body section is rendered for it using the API. Email body has 3 sections:
   - Email subject
   - Email body
   - Email date and time
- Email can be marked favorite in the body section of the email
- Filter emails marked as favorite, read and unread
- The date is converted in the format of dd/MM/yyyy hh:mm

## API Sources

The following APIs are used:
1. Get all emails
2. Get email body for a particular email

**Emails List APIs:** 
- https://flipkart-email-mock.now.sh/ (Not Paginated)
- https://flipkart-email-mock.now.sh/?page=<pageNumber> (Paginated)
- e.g. https://flipkart-email-mock.now.sh/?page=1 and https://flipkart-email-mock.now.sh/?page=2

**Email body API:**
- https://flipkart-email-mock.now.sh/?id=<email-item-id>
- e.g. https://flipkart-email-mock.now.sh/?id=3


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
