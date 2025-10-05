# ShopSphere

This project is a mini e-commerce frontend built with Next.js, created as a demonstration of frontend development skills.

## Objective

my goal is to build a simple, clean and functional e-commerce interface that includes product listings, product details, and a shopping cart, while demonstrating my skills with Next.js, modern React patterns, and UI design.

### State Management

The global shopping cart state is managed using React's Context API (`createContext` and `useReducer`). A `useReducer` hook was chosen for more predictable and robust state transitions. The cart is persisted in the browser's `localStorage` to maintain state across sessions, with hydration-safe logic to prevent server-client mismatches.

### Data Fetching

Server Components**: The Home page (`/`) and Product Detail pages (`/product/[id]`) are implemented as React Server Components (RSCs). This allows data to be fetched on the server, reducing client-side JavaScript and improving initial load performance. For this project, product data is imported directly into Server Components to avoid an unnecessary network call to the app's own API.

API Route**: A Next.js API route at `/api/products` and `/api/products/[id]` serves mock product data. This demonstrates the ability to create API endpoints within Next.js.
Client Components**: Components requiring interactivity (like "Add to Cart" buttons) or access to client-side state (like the `CartContext`) are marked with the `"use client"` directive. Data is passed down from Server Components to Client Components as props.

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