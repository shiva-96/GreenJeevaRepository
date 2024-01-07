# React + Vite
```bash

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This project is a React application for managing user details. It displays a list of users fetched from a JSONPlaceholder API and allows users to add new ones and see the more details of the user.

# How to Run the Application
    Follow the steps below to run the React User Management App:

# Prerequisites
    Node.js installed on your machine

# Installation
    1. Clone the repository to your local machine:
        git clone https://github.com/shiva-96/GreenJeevaRepository.git
    2. Navigate to the project directory:
        cd user-dashboard-application
    3. Install dependencies:
        npm install

# Running the App
    Once the installation is complete, you can start the React application:
    use the below command to start react app 
    npm run dev
    The application will be available at http://localhost:5173 in your web browser.

# Adding New Users
    Click on the "Add New User" icon to open the modal.
    Fill in the required details for the new user.
    Click on the "Add User" button to add the new user to the list.

# Project Structure
    The project structure is organized as follows:

    src/components: Contains React components used in the application.
    allUsersComponent.js: Displays a table with all users.
    detailsComponent.js: Display the user details.
    src/App.jsx: The main application component that integrates other components.
    src/main.jsx: Entry point of the React application.
    package.json: Configuration file for npm packages and scripts.

# Dependencies
    @mui/material: Material-UI components for the user interface.
    react-router-dom: Used for navigation between components.
    @mui/icons-material: Material-UI icons for the "Read More" functionality.
    node-fetch: Used for making HTTP requests to the JSONPlaceholder API.
