

# E-commerce App Setup Guide

This guide provides step-by-step instructions on how to set up and run the E-commerce App in your machine. This app lets you, see all products, products by id, add to cart, remove from cart and lets you buy the products. Other than this,Api is also built by me and  API has only one route ie. /items.




## Pre-requisites
Before you begin, ensure you have the following installed on your machine:
* Node.js (v18 or higher) -- for backend
* MongoDB (local instance or access to a remote server provided by atlas etc.) -- getting all the items from 
* React - for frontend
* Firebase auth - for authentication
* Firestore - for saving the users incoming and placing orders.
* YUP - for form validation
* Redux - for state management




## Getting Started

### 1. Clone the Repository
Clone the repository from GitHub to your local machine using the following command:

```shell
https://github.com/chuphal/E-commerce.git
```

Navigate into the project directory:
```shell
cd E-commerce
```
### 2. Configure Environment Variables
Create a .env file in the root directory of the project and configure the necessary environment variables. Use the provided .env.example file as a template:

```text
# Server port
PORT=5000

MONGO_URI=your_mongo_uri
VITE_API_KEY=yours
VITE_AUTH_DOMAIN=yours
VITE_PROJECT_ID=yours
VITE_STORAGE_BUCKET=yours
VITE_MESSAGING_SENDER_ID=yours
VITE_APP_ID=yours

```
NOTE: If not valid, then try making two .env files, one at the root and other at /frontend.


### 3. Install Dependencies and build the app
Install the required dependencies for root and frontend folders using npm:

```shell
npm run build
```

#### 4. Start the Server
Start the server using the following command:
```shell
npm run app
#or 
npm start
```
#### 5. Verify the Setup
Open your browser and navigate to http://localhost:5000/ . 



### Scripts
* "npm start" - Start the server
* "npm run app" - start the server with nodemon

### Deployed link
* Go to the link:  [https://e-commerce-modg.onrender.com]

## Contact
Email: - [cchuphal4@gmail.com]


# Thank you !!