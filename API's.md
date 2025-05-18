# Apartment Rental Backend API Documentation

## Base URL
```
http://localhost:3000
```
## Running the Server
```bash
# Using nodemon (recommended for development)
nodemon index.js

# Using node
node index.js
```

The server will start running at `http://localhost:3000`

## Authentication APIs

### User Registration
```http
POST /signup
```
Request Body:
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "Tenant|Owner|Admin"
}
```
Response:
```json
{
  "message": "User registered successfully"
}
```

### User Login
```http
POST /login
```
Request Body:
```json
{
  "email": "string",
  "password": "string"
}
```
Response:
```json
{
  "message": "Login successful",
  "user": {
    "id": "number",
    "name": "string",
    "email": "string",
    "role": "string",
    "status": "string"
  }
}
```

### List All Users
```http
GET /users
```
Response:
```json
{
  "users": [
    {
      "id": "number",
      "name": "string",
      "email": "string",
      "role": "string",
      "status": "string",
      "created_at": "datetime"
    }
  ]
}
```

## Apartment Management APIs

### Create Apartment
```http
POST /creatapart
```
Request Body:
```json
{
  "owner_id": "number",
  "title": "string",
  "description": "string",
  "price": "number",
  "location": "string",
  "primary_image": "string (URL)"
}
```
Response:
```json
{
  "message": "Apartment created successfully",
  "apartment_id": "number"
}
```

### Add Apartment Images
```http
POST /creatapart/:id/images
```
Request Body:
```json
{
  "images": [
    {
      "image_url": "string",
      "caption": "string"
    }
  ]
}
```
Response:
```json
{
  "message": "Images added successfully"
}
```

### List All Apartments
```http
GET /listapart
```
Response:
```json
{
  "apartments": [
    {
      "id": "number",
      "title": "string",
      "price": "number",
      "primary_image": "string",
      "location": "string",
      "owner_name": "string"
    }
  ]
}
```

### Get Single Apartment
```http
GET /listapart/:id
```
Response:
```json
{
  "apartment": {
    "id": "number",
    "title": "string",
    "description": "string",
    "price": "number",
    "primary_image": "string",
    "location": "string",
    "owner_name": "string",
    "owner_email": "string",
    "additional_images": [
      {
        "image_url": "string",
        "caption": "string"
      }
    ]
  }
}
```

## Booking Management APIs

### Create Booking
```http
POST /booking
```
Request Body:
```json
{
  "tenant_id": "number",
  "apartment_id": "number",
  "booking_date": "date",
  "days": "number"
}
```
Response:
```json
{
  "message": "Booking created successfully",
  "booking_id": "number",
  "status": "Pending"
}
```

### Get Tenant's Bookings
```http
GET /booking/tenant/:tenant_id
```
Response:
```json
{
  "bookings": [
    {
      "booking_id": "number",
      "booking_date": "date",
      "status": "string",
      "days": "number",
      "apartment_title": "string",
      "price": "number",
      "primary_image": "string",
      "location": "string",
      "owner_name": "string"
    }
  ]
}
```

### Get Owner's Bookings
```http
GET /booking/owner/:owner_id
```
Response:
```json
{
  "bookings": [
    {
      "booking_id": "number",
      "booking_date": "date",
      "status": "string",
      "days": "number",
      "apartment_id": "number",
      "apartment_title": "string",
      "price": "number",
      "primary_image": "string",
      "location": "string",
      "tenant_name": "string",
      "tenant_email": "string"
    }
  ]
}
```

### Get Owner's Booking Statistics
```http
GET /booking/owner/:owner_id/stats
```
Response:
```json
{
  "statistics": {
    "total_bookings": "number",
    "pending_bookings": "number",
    "confirmed_bookings": "number",
    "cancelled_bookings": "number",
    "total_apartments_booked": "number",
    "total_days_booked": "number"
  }
}
```

### Update Booking Status
```http
PATCH /booking/:booking_id/status
```
Request Body:
```json
{
  "status": "Pending|Confirmed|Cancelled"
}
```
Response:
```json
{
  "message": "Booking status updated successfully",
  "status": "string"
}
```

## Error Responses
All APIs may return the following error responses:

### 400 Bad Request
```json
{
  "message": "Error message describing the issue"
}
```

### 401 Unauthorized
```json
{
  "message": "Invalid email or password"
}
```

### 404 Not Found
```json
{
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "message": "Internal server error"
}
```

 