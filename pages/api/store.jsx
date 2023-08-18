import React, { useState } from 'react';
import addUser from './add-doc'; // Update the import statement
console.log("hello")
const AddDocument = () => {
  const [status, setStatus] = useState(''); // Initialize with an empty string

  const handleAddDocument = async () => {
    const user = { first: 'John', last: 'Doe', born: 1990 };
    try {
      await addUser(user); // Await the addUser function
      setStatus('Document added successfully.'); // Update status on success
    } catch (error) {
      console.error('Error adding document:', error);
      setStatus('Error adding document.'); // Update status on error
    }

  };

  return (
    <div>
      <button onClick={handleAddDocument}>Add Document</button>
      <p>{status}</p> {/* Render the status message */}
    </div>
  );
};

export default AddDocument;
