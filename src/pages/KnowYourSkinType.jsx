import React, { useState } from "react";

const KnowYourSkinType = () => {
  const [image, setImage] = useState(null); // Store the uploaded image
  const [result, setResult] = useState(""); // Store the result from the model

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a preview of the uploaded image
      simulateModelResponse(); // Simulate a default model response
    }
  };

  // Simulate a default model response
  const simulateModelResponse = () => {
    setTimeout(() => {
      setResult("Your skin type is: Normal with slightly dry tendencies."); // Default response
    }, 2000); // Simulates model processing time
  };

  return (
    <div style={styles.container}>
      <h2>Know Your Skin Type</h2>
      <p>Upload a clear picture of your skin to get your skin type analyzed.</p>

      <div style={styles.uploadContainer}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={styles.fileInput}
        />
        {image && (
          <div style={styles.previewContainer}>
            <h3>Uploaded Image:</h3>
            <img src={image} alt="Uploaded Skin" style={styles.imagePreview} />
          </div>
        )}
      </div>

      {result && (
        <div style={styles.resultContainer}>
          <h3>Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  uploadContainer: {
    margin: "20px 0",
  },
  fileInput: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  previewContainer: {
    marginTop: "20px",
    textAlign: "center",
  },
  imagePreview: {
    maxWidth: "300px",
    height: "auto",
    borderRadius: "10px",
    marginTop: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  resultContainer: {
    marginTop: "20px",
    backgroundColor: "#f4f4f4",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
};

export default KnowYourSkinType;
