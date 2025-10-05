# ShopSphere: A Mini E-Commerce Frontend

This project is a mini e-commerce frontend built with Next.js, created as a demonstration of frontend development skills.

## Objective

The goal is to build a simple, clean, and functional e-commerce interface that includes product listings, product details, and a shopping cart, while demonstrating proficiency with Next.js, modern React patterns, and UI design.

## Features Implemented

-   **Home Page**: Displays a grid of available products.
-   **Product Detail Page**: A dynamic route (`/product/[id]`) shows more information about a specific product.
-   **API Route**: A mock API endpoint (`/api/products`) is created to serve product data, fulfilling the exploration requirement.
-   **Shopping Cart**:
    -   Users can add and remove items from the cart.
    -   The cart state is persisted in `localStorage`.
    -   A dedicated `/cart` page displays all items, allows quantity adjustments, and shows the total price.
    -   The header shows a real-time count of items in the cart.
-   **Styling**: The application is styled with **TailwindCSS** and **shadcn/ui**, featuring a custom color theme for a professional and modern look.
-   **Responsive Design**: The layout adapts to various screen sizes, from mobile to desktop.
-   **User Experience**: Includes loading skeletons and toast notifications for a smoother user journey.

## Design & Technical Approach

### State Management

The global shopping cart state is managed using React's Context API (`createContext` and `useReducer`). A `useReducer` hook was chosen for more predictable and robust state transitions. The cart is persisted in the browser's `localStorage` to maintain state across sessions, with hydration-safe logic to prevent server-client mismatches.

### Data Fetching

-   **Server Components**: The Home page (`/`) and Product Detail pages (`/product/[id]`) are implemented as React Server Components (RSCs). This allows data to be fetched on the server, reducing client-side JavaScript and improving initial load performance. For this project, product data is imported directly into Server Components to avoid an unnecessary network call to the app's own API.
-   **API Route**: A Next.js API route at `/api/products` and `/api/products/[id]` serves mock product data. This demonstrates the ability to create API endpoints within Next.js.
-   **Client Components**: Components requiring interactivity (like "Add to Cart" buttons) or access to client-side state (like the `CartContext`) are marked with the `"use client"` directive. Data is passed down from Server Components to Client Components as props.

### UI & Styling

-   **Component Library**: [shadcn/ui](https://ui.shadcn.com/) is used for its accessible, unstyled components, providing a solid foundation for building the UI.
-   **Styling**: TailwindCSS is used for all styling. A custom theme was configured in `globals.css` using HSL variables, based on the provided color palette, to create a cohesive and visually appealing design.
-   **Layout**: The layout is built to be clean and responsive, using CSS Grid and Flexbox.
-   **Interactivity**: Subtle animations from `tailwindcss-animate` and CSS transitions are used on interactive elements like buttons to enhance the user experience. Icons are provided by `lucide-react`.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.
