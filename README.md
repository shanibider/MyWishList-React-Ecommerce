
# My WishList E-commerce React application
Dynamic E-commerce application developed with JavaScript, node.js, and React. follows a standard React application structure with routing, state management, and component-based architecture for building modular and maintainable user interfaces.

### Languages and Tools used in this project:
[![My Skills](https://skillicons.dev/icons?i=js,react,html,css,bootstrap,nodejs)](https://skillicons.dev)

### Front-End Development Languages
- JavaScript 
- React-bootstrap, React: Components, Props, Events, Hooks, Router
- CSS3
- HTML5 

### Back-End Development Languages
- Node.JS



### main architecture and methods used in the application:

- [x] **Single Page Application (SPA)**: The application uses react-router-dom for routing, which is a common approach in single-page applications (SPAs). SPAs load a single HTML page and dynamically update that page as the user interacts with the app.

- [x] **Context API**: Manages the state of a shopping cart across the application using the Context API, providing shopping cart functionality to child components.

- [x] **Component-based Architecture**: The application is built using React, a JavaScript library that follows a component-based architecture. This app is structured around reusable and modular components, with each page represented as a component (`<Shop />`, `<Contact />`, `<Cart />`), along with other components for consistent UI elements and product rendering.
  
- [x] **Context API for State Management**: The application uses React's Context API for state management. The ShopContextProvider is a context provider that is used to manage the state of a shopping cart across the application. This allows state to be shared across multiple components without prop drilling.

- [x] **Functional Components and Hooks**: The application uses functional components and React Hooks. Hooks are a feature introduced in React 16.8 that allow you to use state and other React features without writing a class.

- [x] **CSS Modules**: Styling is done using CSS Modules, allowing for scoped and modular CSS stylesheets for each component.

- [x] **Data Management**: Product data is imported from an external source (`../../products`) and rendered within the `<Shop />` component by mapping over the data and rendering individual product components.

- [x] **React.StrictMode**: The application is wrapped in a React.StrictMode component in the root file. React.StrictMode is a wrapper component that checks for potential problems in an application during development. It does not render any visible UI, but activates additional checks and warnings for its descendants.




## Key Features

- [x] Home - Lists products.
- [x] Shopping Cart - Displaying and managing items in a shopping cart.
- [x] Contact page.


## Ecommerce Website Preview :

### Demo Website

👉 Demo : 

[screen-capture.webm](https://github.com/shanibider/Readme-tests/assets/72359805/08f4879f-d548-4a0f-8a66-48cfc99fdf64)


### The pages

#### Home:

![1](https://github.com/shanibider/Readme-tests/assets/72359805/814bcf94-f598-4e89-99d7-22a50b614160)

#### Cart:

![2](https://github.com/shanibider/Readme-tests/assets/72359805/c7167b18-1cad-4745-b33a-7368ef609f09)

#### Contact:

![3](https://github.com/shanibider/Readme-tests/assets/72359805/8628b38e-fae3-4f1a-87c1-5833c1f06660)


#
## To Run Locally-

```
open new terminal
$ npm i
$ npm start
```
