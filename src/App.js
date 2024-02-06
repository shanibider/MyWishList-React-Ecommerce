// Importing all pages component
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";


// Main component of the application. It imports several components and wraps them in a ShopContextProvider and a Router.
// The ShopContextProvider is a context provider that is used to manage the state of a shopping cart across the application.
// The Router manage navigation between different pages. Inside the Router, there are Route components that define the paths for different pages and the components that should be rendered at those paths.


function App() {
  return (
    <div className="App">
      <ShopContextProvider> {/*Wrapping the entire application with the ShopContextProvider to provide shopping cart functionality*/} 
        
        <Router> {/*Setting up routing using the Router component*/}
          <Navbar /> {/*Rendering the Navbar component*/}
         
          <Routes> {/*Defining routes for different pages*/}
            <Route path="/" element={<Shop />} /> {/*Route for the Shop page*/}
            <Route path="/contact" element={<Contact />} /> {/*Route for the Contact page*/}
            <Route path="/cart" element={<Cart />} /> {/*Route for the Cart page*/}
          </Routes>

        </Router>
        
      </ShopContextProvider>
    </div>
  );
}

export default App;
