This is a Tray.io take home test for senior frontend developer which creates a web application that shows a multi-step web form that collect data from a user before signing up for a service.

## Installation

`git clone https://github.com/akenzua/tray.git`

`npm install`

`npm run dev `

The sign up page should be available on [http://localhost:3000/signup](http://localhost:3000/signup)
However, on the home page [http://localhost:3000](http://localhost:3000) you will see a button that links to signup page. The User page is the index page of the Sign up sub directory.

## Test

To test, run `npm run test`

## Technologies

1. React using Nextjs: This was adopted because of it server-side rendering benefit

2. Redux: was used for state management, however the new @redux/toolkit was adopted because
   of its simplicity and less boiler plate.

3. Style component: styling was done with styled component for its dynamic stylings

4. React testing library

5. Validator

6. Typescript

7. Lodash

## Code Improvement

How I would change the configuration of certain page

    - User page:
    I will add a confirm password input

How I would add new pages - To add new pages to the form, I would a sub directory to the `pages/signup` directory and and update the sign up navigation accordingly. The pages directory in nextjs represent the routing system according to its hierachy.

How would you implement going back page - To implement going back to previous page, I would add a back button which would have `router.push(previous_page)`. The form state is already managed by redux. also ensure you can move to any page through the router without filling in the required inputs (name, email and password) by adding a useEffect on page Privacy and Done that check if those values are in the redux state, and if they are not it will redirect to User page.
