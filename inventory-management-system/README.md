```bash
# Inventory Management System API

Welcome to the Inventory Management System API. This API allows you to manage inventory items, view statistics, and perform other operations related to your inventory.

## Setup Instructions

### 1. Clone the Repository
git clone https://github.com/your-username/inventory-management-api.git
cd inventory-management-api

### 2. Install Dependencies
npm install

### 3. Set Up MongoDB Database
install monogo in your pc

### 4. Start the Server
npm start

The server will start at http://localhost:9000.

## API Usage
### 1. First Create a user 
POST-ApiUrl : http://localhost:9000/ims/user/register-user

Request Body:
{
    "username":"userName19",
    "password":"userName@123"
}

### 2. Login using the username and password
POST-ApiUrl : http://localhost:9000/ims/user/login
Request Body: 
{
    "username":"userName19",
    "password":"userName@123"
}
Response : 
{
    "status": 200,
    "mssg": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTk5MWQ0ZjIzYWE0MWYyYmUxNGNiMjAiLCJpYXQiOjE3MDQ2NDkyNjQsImV4cCI6MTcwNDY1Mjg2NH0.Ja6lUubY4CRQpI6o3XmAFnFzf5_bWV6JqAe9Y44UmIc"
    }
}

# Token is required in all CRUD operation.

### 3. Create a inventory
POST-ApiUrl : http://localhost:9000/ims/inventoryItem/create-inventory
Request Body: 
{
    "name": "Smartphone",
    "description": "Latest smartphone with advanced features",
    "price": 800,
    "quantity": 20,
    "category": "Electronics"
}

### 3. Read all inventory list.
GET-ApiUrl : http://localhost:9000/ims/inventoryItem/read-inventory

### 4. Update a inventory with id
PUT-ApiUrl : http://localhost:9000/ims/inventoryItem/update-inventory:id
Request Body: 
{
    "name": "Tab",
    "description": "Latest tab with advanced features",
    "price": 80000,
    "quantity": 20,
    "category": "Electronics"
}

### 5. Delete a inventory with id
DELETE-ApiUrl : http://localhost:9000/ims/inventoryItem/delete-inventory:id

### 6. Search inventories based on category or name of inventory
GET-ApiUrl : http://localhost:9000/ims/inventoryItem/search?category=Electronics
Response: {
    "status": 200,
    "mssg": [
        {
            "_id": "659863ea83391b9cb80d9b6a",
            "name": "Smartphone",
            "description": "Latest smartphone with advanced features",
            "price": 800,
            "quantity": 20,
            "category": "Electronics",
            "__v": 0
        },
        {
            "_id": "659867c17003d78390cc4643",
            "name": "Laptop",
            "description": "High-performance laptop with SSD",
            "price": 1200,
            "quantity": 10,
            "category": "Electronics",
            "__v": 0
        }
    ]
}

### 7. Statistics Total items in inventory 
GET-ApiUrl : http://localhost:9000/ims/statistics/total-items
Response :
{
    "status": 200,
    "mssg": 4
}

### 8. Statistics find the average of the  price in inventory  
GET-ApiUrl : http://localhost:9000/ims/statistics/average-price
Response :
{
    "status": 200,
    "mssg": 550
}

### 9. Statistics get the count of the category  
GET-ApiUrl : http://localhost:9000/ims/statistics/categories-distribution
Response :
{
    "status": 200,
    "mssg": [
        {
            "count": 2,
            "category": "Furniture"
        },
        {
            "count": 2,
            "category": "Electronics"
        }
    ]
}