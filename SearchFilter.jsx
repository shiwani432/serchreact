import React, { useState } from "react";

function SearchFilter() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const items = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Watermelon"];

  //   list ko filter krne ke liye filter() ka use
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())//big ya small dono me likhne ke liye
  ); 

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2> Search Filter in React</h2>
      
     
      <input type="text" placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", width: "250px", marginBottom: "10px" }}
      />

      {/*  Display krane ke liye map f. se  */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
}

export default SearchFilter;
