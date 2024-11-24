import PlaceholderArt from "../components/PlaceholderArt";
import React from "react";

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <h2>Welcome to Ayurvedic Skincare</h2>
      <p>Discover personalized Ayurvedic skincare solutions tailored for you.</p>
        <PlaceholderArt></PlaceholderArt>
      
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    paddingTop: "80px",
  },
};

export default LandingPage;
