# React Product Management Application

A modern, fully responsive product listing and cart application built with React, Bootstrap 5, and React hooks. This app is a functional mirror of the ASP.NET MVC version, with all interactions handled client-side using React's component and state architecture.

## Features

- **Product List**: Grid layout of products with server API integration.
- **Filtering & Search**: Filter by category; search bar with real-time match highlighting.
- **Product Details Modal**: On click, display a modal with all product info and ratings.
- **Add to Cart**: Add products from the grid or modal; see smart button UI and notifications for both.
- **Shopping Cart**: Off-canvas shopping cart accessible via navbar icon, showing cart contents and total.
- **Sticky Navbar & Footer**: Matches requirements and design of the ASP.NET MVC app.
- **Responsive**: Fully responsive; tested on mobile, tablet, desktop using Bootstrap 5.
- **Animations**: Includes subtle animations and hover effects for improved UX.
- **Notifications**: Consistent top-right notifications when adding items to cart (across product grid and modal).
- **API Proxy**: By default, the app connects to the same Fake Store API as the MVC app.

## Setup

1. **Requirements**
   - Node.js (v18 or v20 recommended, avoid v23 due to some engine warnings)
   - npm (v10+)

2. **Install Dependencies**

3. **Start the App**
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

4. **API Source**
- The React app fetches products and categories from [Fake Store API](https://fakestoreapi.com/).
- To connect to your ASP.NET backend API instead, change the API URLs in the service files or add a proxy field in `package.json`.

## Project Structure

- **src/components/**: Shared React components (ProductCard, ProductModal, Cart, Navbar, Footer, etc.)
- **src/context/**: React Context for global cart state.
- **src/App.js**: Main application routing and layout.
- **src/App.css**: Main styles (matching ASP.NET UX).
- **public/**: Static assets and default HTML.

## Key Implementation Details

- All interactions for notifications, button states, and cart management are handled with local React state and context, following the same UX as the ASP.NET MVC version.
- Highlighted search functionality and category filtering are handled client-side.
- All add-to-cart messages and button transitions exactly match your ASP.NET MVC implementation.

## Assumptions & Notes

- No persistent database—cart state is stored in React context/`localStorage`.
- Product and category data are fetched from the public Fake Store API.
- Node.js 18.x or 20.x is recommended to avoid package warnings.

## License

This project is for assessment and demonstration purposes only.

## Contact

For issues or questions, please contact the developer
