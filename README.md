# advertyzment-task

### Components
1. Navbar
  - prop : button handler
2. User Card
  - prop : user data(fetched from API)
3. Toast
  - prop : message to display

> In additon to these, I have a helper function for making network requests to fetch data from the API

### Workflow

- On clicking `Get Users` button, a GET request is made to the given API to fetch all user data. On successful request (`status 200`) data is returned and state is updated.
- Once state(`userData`) is updated user cards are rendered by using the `map()` function on the `useState` array of all users passing each user's data as `prop` to the `UserCard` component. 

BONUS 

- Each user card is provided with a CTA(call-to-action) button(`Follow`). User can click on the button to follow the user(state updates to "following")

### Tech Stack
1. [React](https://reactjs.org/)
2. [react-icons](https://react-icons.github.io/react-icons/)
3. [react-loader-spinner](https://github.com/mhnpd/react-loader-spinner), for Loader
4. [axios](https://axios-http.com/docs/intro), for API calls
5. [byotiCSS](https://github.com/SlaYpoint/byotiCSS), this is my own CSS component libray that I use for my side-projects