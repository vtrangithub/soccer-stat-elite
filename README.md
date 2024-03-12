[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14138077&assignment_repo_type=AssignmentRepo)

# 320-Final-Project

Project requirements:

- Application is functional and provides an experience to the user
  - Your app runs and a user can interact with it to do something. Very open ended what this will be like. Use your creativity to make something fun!
- Application uses routes
  - App must include at least two routes, ideally one that takes params to call API data, but at minimum loads two or more routes in your Single Page Application. React Router strongly encouraged.
- Fetches external API
  - Whether an api you have created (like a firebase collection, or similar), or a published API, but it must pull data from an external source. **Must use the native fetch api.** No external libraries for data fetching (like axios or react-query). **EXCEPTION**: Can use Firebase SDK if you are using a Firebase App
- Application is deployed
  - Deployed and visible to the public. GitHub Pages, Vercel, Firebase, etc
- Submitted to GitHub properly
  - All work done on a feature branch and merged into the main branch
- Utilizes reusable components
  - As needed components will be flexible and reusable
- Uses prop-types
  - All components that take in props must use prop-types, no generic proptypes, they must be specific. For example, if it takes an array of data, it must be detailed to what that array of data looks like, not just a general array
- README updated
  - README updated to include:
  - the public facing url
  - a brief summary of your project
  - The answers to the following questions Fill out each of these with a few sentences (50 characters minimum):
  - What worked well in this project (what was easy/straightforward)?
  - What didn't work well (what was difficult to understand or parse)?
  - What changes would you make to this project now that it's deployed?
  - What would you improve and/or add to this project now that it's deployed?"
- Incorporates unit testing
  - At least one unit test must be included and working. Components reliant on api calls will not need to be unit tested, but anything that just relies on props will be easy to test. Must document how to run tests
- Utilzes Modern JavaScript
  - Utilizes modern methods of writing JS, no var keyword. Uses arrow functions where appropriate and uses modern methods (for example .map())
- App has styling and is polished
- Incorporate custom CSS to your project. Outside CSS libraries are allowed (Bootstrap, Tailwind, etc), Remove `console.log` statements once you're finished with development. Check for and remove Check for any React errors in the console. Fix linting issues

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# SoccerStat Elite

## Public URL

Visit the deployed SoccerStat Elite application at (https://jubilant-dollop-5mqwyly.pages.github.io/).

## Project Summary

SoccerStat Elite is a React-based web application that provides users with up-to-date soccer statistics, including team statistics, league standings, and more. It utilizes the API Sports football data to fetch and display the statistics. The app is designed with React Router for navigation, Material UI for styling, and includes unit testing to ensure reliability.

## Evaluation

### What worked well in this project?

Implementing React components and using React Router for navigation was straightforward. Fetching data from the external API and integrating it with the app's state management provided a seamless experience. The Material UI library facilitated the styling process, making the app look more professional.

### What didn't work well?

Understanding and handling the asynchronous nature of API calls was initially challenging. Managing state across multiple components and ensuring the app's responsiveness across different devices required extra effort and fine-tuning.

### What changes would you make to this project now that it's deployed?

Post-deployment, I would focus on optimizing the application's performance, particularly in how it handles data fetching and state management. Enhancing the caching mechanism to reduce redundant API calls would be a priority.

### What would you improve and/or add to this project now that it's deployed?

Future improvements would include adding more interactive elements, such as charts or graphs for visualizing the statistics. Integrating user authentication to allow personalized experiences, such as favorite teams or leagues, would significantly enhance user engagement. Additionally, expanding the unit testing suite to cover more components and user interactions would improve the app's reliability and maintainability.

## Unit Testing

This project incorporates unit testing to ensure that components behave as expected. Follow these instructions to execute the unit tests:

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) and npm installed on your machine. These are required to run the tests and the application itself.

### Running Tests

1. **Open a Terminal:** Navigate to the project's root directory in your terminal or command prompt.

2. **Install Dependencies:** If you haven't already, install the project dependencies with the command:
   npm install

3. **Run test:**
   npm run test
