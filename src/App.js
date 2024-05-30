import React from "react";
import NavBar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import { productsArr } from "./Data";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <h3 className="text-center mt-5">Music</h3>
      <Card data={productsArr}/>
      <Footer/>
    </div>
  );
}

export default App;
