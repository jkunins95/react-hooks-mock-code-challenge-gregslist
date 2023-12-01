import React, { useState } from 'react';

const NewListingForm = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = ({ description, image, location });

    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(resp => resp.json())
    .then((newListing) => console.log(newListing));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Description:</label>
      <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
      <label htmlFor="image">Image:</label>
      <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)}></input>
      <label htmlFor="location">Location:</label>
      <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)}></input>
      <button type="submit">Add Listing</button>
    </form>
  );
}

export default NewListingForm;