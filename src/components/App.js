import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const API = "http://localhost:6001/listings"

function App() {
  const [listings, setListing] = useState([])

  function getImage() {
    fetch(API)
    .then((response) => response.json())
    .then((fetchedLListings) => setListing(fetchedLListings))
  }

  useEffect(
    getImage, []
  )
  return (
    <div className="app">
      <Header />
      <ListingsContainer productListings={listings}/>
    </div>
  );
}

export default App;
