import React from "react";
import { useSpring, animated } from "react-spring";

const DriverCard = ({ driver }) => {
  const styles = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.div style={styles} className="driver-card">
      <div className="driver-card-content">
        <div className="driver-card-header">
          <img src={driver.image} alt={driver.name} className="driver-image" />
          <h2>{driver.name}</h2>
        </div>
        <p><strong>Location:</strong> {driver.location}</p>
        <p><strong>Languages Spoken:</strong> {driver.languages.join(", ")}</p>
        <p><strong>Experience:</strong> {driver.experience}</p>
        <p><strong>Contact:</strong> {driver.contact}</p>
      </div>
    </animated.div>
  );
};

const PersonalDriver = () => {
  const drivers = [
    { 
      name: "Ahmed Ben Hamida",
      location: "Tunis",
      languages: ["Arabic", "French", "English"],
      experience: "7 years",
      contact: "+216 55 123 456",
      image: "https://images.unsplash.com/photo-1608906882784-65713f4629c4" // Add the image file name or URL
    },
    { 
      name: "Fatma Ben Ali",
      location: "Sousse",
      languages: ["Arabic", "English"],
      experience: "5 years",
      contact: "+216 52 987 654",
      image: "https://images.unsplash.com/photo-1628781637979-ccfbb6e04316" // Add the image file name or URL
    },
    { 
      name: "Mohamed Bourguiba",
      location: "Hammamet",
      languages: ["Arabic", "French", "German"],
      experience: "10 years",
      contact: "+216 56 789 123",
      image: "https://images.unsplash.com/photo-1608907977743-81734a26da32" // Add the image file name or URL
    },
    { 
      name: "Salma Chaker",
      location: "Djerba",
      languages: ["Arabic", "French", "English"],
      experience: "3 years",
      contact: "+216 55 555 555",
      image: "https://images.unsplash.com/photo-1628637398034-d90506393572" // Add the image file name or URL
    },
  ];

  return (
    <div className="driver-container">
      {drivers.map((driver, index) => (
        <DriverCard key={index} driver={driver} />
      ))}
    </div>
  );
};

export default PersonalDriver;