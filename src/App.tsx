// src/App.tsx
import "./App.css";                     // optional
import { Navbar, Footer } from "@/components/common";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";

// temp pages just to test routing 


function Products(){
  return <h2 className="text-3xl font-bold text-green-600">Products Page</h2>;
}

function Login(){
  return <h2 className="text-3xl font-bold text-green-600">Login Page</h2>;
}

export default function App() {
  return (
    <>
      <Navbar />  {/* stays on all pages */}
      <Routes>
        {/* each route defines a URL path and what to render*/}
        <Route path="/" element={ <Home />} />   {/*our real home page */}
        <Route path="/products" element={ <Products /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
      <Footer />  {/* stays on all pages */}

      
    </>
  );
}
