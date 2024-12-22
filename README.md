# Unstop Login Page

This is a responsive login page for the Unstop application. The page includes options for logging in with Google and Facebook, as well as a form for direct login using a username, email, and password. The project is built using React and Tailwind CSS for styling.

## Features

- **Login with Google and Facebook**: Buttons to allow users to log in using their Google or Facebook accounts.
- **Username and Password Login**: A form that includes fields for username, email, and password.
- **Validation**: Ensures the username is "emilys", the email is in a proper format, and the password is at least 8 characters long.
- **Remember Me**: A checkbox to allow users to stay logged in.
- **Forgot Password?**: A link for users who forgot their password (no action required).
- **Register Link**: A link for new users to register (no action required).
- **Responsive Design**: Adapts to various screen sizes, from small mobile devices to large desktops.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/unstop-login.git
   ```
2. Navigate to the project directory:
```bash
cd Login-Page
```

3. Install the dependencies:
```bash
npm install
```

## Usage
1. Start the development server:
```bash
npm run dev
```
2. Open your browser and navigate to http://localhost:5173 to view the login page.

## Project Structure
- public/: Contains the public assets.
- src/: Contains the React components and application logic.
    - components/: Contains the Login and LoggedIn components.
    - App.js: The main application component.
    - index.js: The entry point for the React application.

## Components
- Login: The login form component with validation and API integration.
- Home: The component displayed after a successful login, showing user details and a logout button.
- App: The main application component that sets up routing.

## API Integration
The form sends a POST request to https://dummyjson.com/auth/login with the username, password, and optionally the email. On a successful response, user data is stored in localStorage and the user is redirected to the main page. When the user clicks **Logout** on the main page, he/she is directed back to the login page to enter their credentials whereas the user data is being cleared from the LocalStorage.
