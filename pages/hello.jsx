import React, { useState } from 'react';
import axios from 'axios';
import addUser from '../src/data';

const UserInputForm = () => {
  const [inputData, setInputData] = useState({
    productName: '',
    productNo: 0,
    price: 0,
    description: '',
    features: '',
    category: '', // Add category field to state
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageSelect = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let newImageName = '';
    if (selectedImage) {
      try {
        const formData = new FormData();
        formData.append('myImage', selectedImage);
        const { data } = await axios.post('/api/image', formData);
        newImageName = selectedImage.name;
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }

    const featuresArray = inputData.features.split(',').map((feature) => feature.trim());

    const inputDataWithImage = {
      ...inputData,
      imageName: newImageName,
      productNo: parseInt(inputData.productNo),
      price: parseInt(inputData.price),
      features: featuresArray,
    };
    addUser(inputDataWithImage);
  };



  
  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label htmlFor="productName">Product Name: </label>
          <input
            type="text"
            name="productName"
            value={inputData.productName || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="productNo">Product No: </label>
          <input
            type="text"
            name="productNo"
            value={inputData.productNo || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            name="price"
            value={inputData.price || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea
            name="description"
            value={inputData.description || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="features">Features: </label>
          <textarea
            name="features"
            value={inputData.features || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category: </label>
          <select
            name="category"
            value={inputData.category}
            onChange={handleInputChange}
          >
            <option value="">Select a category</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
            <option value="Category 4">Category 4</option>
            <option value="Category 5">Category 5</option>
          </select>
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input type="file" accept="image/*" onChange={handleImageSelect} />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Input Object:</h2>
        <pre>{JSON.stringify(inputData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default UserInputForm;
