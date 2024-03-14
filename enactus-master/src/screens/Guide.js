import React from "react";
import { useSpring, animated } from "react-spring";

const GuideCard = ({ guide }) => {
  const styles = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.div style={styles} className="guide-card">
      <div className="guide-card-content">
        <div className="guide-card-header">
          <img src={guide.image} alt={guide.name} className="guide-image" />
          <h2>{guide.name}</h2>
        </div>
        <p><strong>Location:</strong> {guide.location}</p>
        <p><strong>Languages Spoken:</strong> {guide.languages.join(", ")}</p>
        <p><strong>Expertise:</strong> {guide.expertise}</p>
        <p><strong>Description:</strong> {guide.description}</p>
        <p><strong>Contact:</strong> {guide.contact}</p>
      </div>
    </animated.div>
  );
};

const Guide = () => {
  const guides = [
    { 
      name: "Ali Ben Salah",
      location: "Tunis",
      languages: ["Arabic", "French", "English"],
      expertise: "Historical Tours",
      description: "Passionate about Tunisian history and culture.",
      contact: "+216 55 123 456",
      image: "https://example.com/ali_ben_salah.jpg" 
    },
    { 
      name: "Leila Khediri",
      location: "Sousse",
      languages: ["Arabic", "French", "German"],
      expertise: "Beach Excursions",
      description: "Enthusiastic guide for seaside adventures.",
      contact: "+216 52 987 654",
      image: "https://example.com/leila_khediri.jpg" 
    },
    { 
      name: "Youssef Dridi",
      location: "Djerba",
      languages: ["Arabic", "English", "Italian"],
      expertise: "Cultural Immersion",
      description: "Expert in traditional Tunisian crafts and cuisine.",
      contact: "+216 56 789 123",
      image: "https://example.com/youssef_dridi.jpg" 
    },
    { 
      name: "Fatma Ben Ahmed",
      location: "Hammamet",
      languages: ["Arabic", "French", "Spanish"],
      expertise: "Art Tours",
      description: "Passionate about showcasing Tunisian art and architecture.",
      contact: "+216 55 555 555",
      image: "https://example.com/fatma_ben_ahmed.jpg" 
    },
    { 
      name: "Mehdi Bouzid",
      location: "Tunis",
      languages: ["Arabic", "French", "English"],
      expertise: "City Walks",
      description: "Knows the hidden gems of Tunis like the back of his hand.",
      contact: "+216 54 321 987",
      image: "https://example.com/mehdi_bouzid.jpg" 
    },
    { 
      name: "Sana Khelifi",
      location: "Sfax",
      languages: ["Arabic", "French", "Russian"],
      expertise: "Culinary Tours",
      description: "Brings Tunisian flavors to life with every tour.",
      contact: "+216 51 234 567",
      image: "https://example.com/sana_khelifi.jpg" 
    },
  ];

  return (
    <div className="guide-container">
      {guides.map((guide, index) => (
        <GuideCard key={index} guide={guide} />
      ))}
    </div>
  );
};

export default Guide;