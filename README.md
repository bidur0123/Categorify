# Afford Medical Technology

This project is a React-based web application that displays the top N products from various categories. Users can filter, sort, and paginate through products, viewing details such as name, company, category, price, rating, discount, and availability.

## Features

- Display products from various categories.
- Filter products by category, price range, and availability.
- Sort products by different attributes.
- Paginate through products.
- View detailed information about each product.

## Screenshots

### Frontend View
![Frontend View](screenshots/Screenshot(341).png)

### Backend View
![Backend View](screenshots/Screenshot(342).png)

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   git clone https://github.com/bidur0123/top-n-products.git
   cd top-n-products

2. Install dependencies:
   npm install

## Running the Application

To start the development server, run:
npm start

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## API Endpoints

This application interacts with a backend API to fetch product data. The following endpoints are expected:

- `GET /categories/:category/products`: Get a list of products for a given category.
  - Query parameters:
    - `n`: Number of products to fetch.
    - `page`: Page number for pagination.
    - `sortby`: Attribute to sort by.
    - `order`: Sort order (`asc` or `desc`).
    - `minPrice`: Minimum price filter.
    - `maxPrice`: Maximum price filter.

- `GET /categories/:category/products/:productId`: Get details of a specific product.
