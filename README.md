# React E-Commerce Application

Live Demo:
   https://mohamedali09.github.io/E-Commerce/
## Table of Contents

1. [Contexts and Components Setup](#contexts-and-components-setup)
2. [Navbar Component](#navbar-component)
3. [NotFound Component](#notfound-component)
4. [ProductDetails Component](#productdetails-component)
  
5. [ProtectedRoutes Component](#protectedroutes-component)
    
6. [Register Component](#register-component)
 
7. [ResetNewPassword Component](#resetnewpassword-component)
 
8. [Verify Component](#verify-component)
  
9. [App Component](#app-component)
 
10. [Additional Notes](#additional-notes)

## 1. Contexts and Components Setup

**Files:**
- `src/Context/TokenContext.js`
- `src/Context/CartContext.js`
- `src/components/Layout/Layout.js`

**Explanation:**
- **Contexts:**
  - `TokenContext`: Manages the user authentication token.
  - `CartContext`: Manages shopping cart data.
- **Layout Component:**
  - Initializes React Router and defines routes for different parts of the application.
  - Utilizes the `ProtectedRoutes` component to secure specific routes based on user authentication.

## 2. Navbar Component

**File:**
- `src/components/Navbar/Navbar.js`

**Explanation:**
- **Navigation:**
  - Displays different navigation links based on user authentication status.
  - Shows the number of items in the shopping cart when authenticated.
- **Logout Functionality:**
  - Implements a logout function to remove the user token from local storage.

## 3. NotFound Component

**File:**
- `src/components/NotFound/NotFound.js`

**Explanation:**
- **Visuals:**
  - Renders a visually appealing 404 image when users reach an undefined route.

## 4. ProductDetails Component

**File:**
- `src/components/ProductDetails/ProductDetails.js`

**Explanation:**
- **Data Fetching:**
  - Retrieves product details using Axios and displays them once fetched.
  - Uses a loading spinner while waiting for the data.
- **Add to Cart:**
  - Utilizes the `addToCart` function from `CartContext` to add products to the shopping cart.
  
## 4. ProductDetails Component (Continued)

**Explanation:**
- **Product Details Display:**
  - Fetches detailed information about a specific product based on the provided ID.
  - Displays product details, including image, name, price, and description.
- **Loading State:**
  - Utilizes a loading spinner (ThreeDots) while waiting for the product details to be fetched.
- **Add to Cart Functionality:**
  - Provides buttons to select different sizes of the product.
  - Allows users to add the selected product to the shopping cart by clicking the "Add to Cart" button.
- **Additional Information:**
  - Displays product code, availability, type (e.g., Fruits), and shipping details.
- **Share Dropdown:**
  - Includes a dropdown menu for sharing the product on social media platforms (Facebook, Twitter, Instagram).

## 5. ProtectedRoutes Component 

**File:**
- `src/components/ProtectedRoutes/ProtectedRoutes.js`

**Explanation:**
- **Dependencies:**
  - Utilizes the `useNavigate` hook from React Router for navigation.
  - Depends on the `tokenContext` for managing user authentication.
- **Functionality:**
  - Checks for the existence of a user token in local storage.
  - Renders child components/routes if the user is authenticated; otherwise, redirects to the login page using `Navigate`.

## 5. ProtectedRoutes Component (Continued)

...

## 6. Register Component 

**File:**
- `src/components/Register/Register.js`

**Explanation:**
- **Dependencies:**
  - Utilizes `useFormik` for form state management and validation.
  - Employs Yup for defining form validation schema.
  - Depends on Axios for making HTTP requests.
- **Functionality:**
  - Captures user input for name, email, password, re-password, and phone.
  - Validates form inputs according to predefined rules.
  - Submits a POST request to the backend for user registration.
  - Navigates to the login page upon successful registration.

## 6. Register Component (Continued)

...

## 7. ResetNewPassword Component 

**File:**
- `src/components/ResetPassword/ResetNewPassword.js`

**Explanation:**
- **Dependencies:**
  - Similar to Register, uses `useFormik` and Yup.
  - Depends on Axios for making the PUT request.
- **Functionality:**
  - Handles user input for email and new password.
  - Validates the form inputs.
  - Sends a PUT request to the backend to reset the user's password.
  - Navigates to the login page upon successful password reset.

## 7. ResetNewPassword Component (Continued)

...

## 8. Verify Component 

**File:**
- `src/components/Verify/Verify.js`

**Explanation:**
- **Dependencies:**
  - Uses `useFormik` and Yup for form handling and validation.
  - Utilizes Axios for making POST requests.
- **Functionality:**
  - Manages user input for the reset code.
  - Validates the input using Yup schema.
  - Sends a POST request to verify the reset code.
  - Navigates to the password reset page upon successful verification.

## 8. Verify Component (Continued)

...

## 9. App Component  

**File:**
- `src/App.js`

**Explanation:**
- **Dependencies:**
  - Utilizes various React components, including `Layout`, `Home`, `Register`, `Login`, etc.
  - Depends on React Router for managing application routes.
- **Initialization:**
  - Initializes React Router and defines routes for different parts of the application.
  - Checks for the existence of a user token in local storage to maintain user authentication across sessions.
- **Context Usage:**
  - Uses the `tokenContext` to manage user authentication tokens.

## 9. App Component (Continued)

...

## Additional Notes

- **Styling:**
  - The application employs the `styles` module for styling components. You can find these styles in respective CSS files (e.g., `NotFound.module.css`).
- **External Libraries:**
  - Axios: Used for making HTTP requests.
  - Yup: Used for defining form validation schemas.
  - React Query: Utilized in comments (not explained) for fetching product details.
- **Routing:**
  - React Router is extensively used for navigation and managing different parts of the application.
- **State Management:**
  - React Context API is used for managing global states related to user authentication and shopping cart.
- **Components Structure:**
  - The components are organized into folders based on their functionality (e.g., Navbar, NotFound, ProductDetails).
- **ProtectedRoutes:**
  - Ensures that certain routes are accessible only when the user is authenticated, enhancing the application's security.
