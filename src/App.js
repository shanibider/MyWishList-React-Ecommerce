// Importing all pages component
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

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
