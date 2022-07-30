import React from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer({productListings}) {
  const myListings = productListings.map((listing) => <ListingCard ket={listing.id} item={listing} />)

  return (
    <main>
      <ul className="cards">
        {myListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
