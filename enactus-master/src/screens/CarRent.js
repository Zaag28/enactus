import React from "react";
import { useSpring, animated } from "react-spring";

const CarRentalCard = ({ company }) => {
  const styles = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.div style={styles} className="driver-card">
      <div className="driver-card-content">
        <div className="driver-card-header">
          <img src={company.logo} alt={company.name} className="driver-image" />
          <h2>{company.name}</h2>
        </div>
        <p><strong>Location:</strong> {company.location}</p>
        <p><strong>Number of Cars Available:</strong> {company.cars.length}</p>
      </div>
    </animated.div>
  );
};

const CarRental = () => {
  const carRentalCompanies = [
    { 
      name: "Autorent",
      location: "Tunis",
      cars: [
        { model: "2022 Toyota Yaris", price: 70 },
        { model: "2021 Nissan Micra", price: 60 },
      ],
      logo: "https://imgs.search.brave.com/F4ZqaovpSs3Llh-syl53hNGN6QLEETLOFtujdHUtTUY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzExLzg3LzI2/LzM2MF9GXzYxMTg3/MjY5NV9rT0twbUJT/V0pNU2tZQmxRV1VK/b2w5TkloaGg1ZHZv/Qy5qcGc"
    },
    { 
      name: "Skanes Cars",
      location: "Monastir",
      cars: [
        { model: "2021 Hyundai Accent", price: 60 },
        { model: "2020 Ford Fiesta", price: 55 },
      ],
      logo: "https://imgs.search.brave.com/_OG5r5p7YGSQDfDgRJqDVzEScKsknIpdHdw3cjGQU98/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzA4LzUxLzE4/LzM2MF9GXzQwODUx/MTgxMl84VUdUdVg4/QmllRzU3MWpyYm16/MFBZc3FMdjF4UHJq/Ty5qcGc"
    },
    { 
      name: "Houmet Cars",
      location: "Djerba",
      cars: [
        { model: "2023 Kia Rio", price: 65 },
        { model: "2021 Volkswagen Polo", price: 55 },
      ],
      logo: "https://imgs.search.brave.com/-qbPh_T6K2JxtbcCB-S-i1u7ELlENNNmIrozYt92b4w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzc2LzkyLzYw/LzM2MF9GXzI3Njky/NjA0Ml9pSmpHVTNT/NXBmbXN5V2tZQmZo/ZWtnUjVGTFRkdWVz/Uy5qcGc"
    },
    { 
      name: "Dar El Ezz",
      location: "Sfax",
      cars: [
        { model: "2022 Peugeot 301", price: 75 },
        { model: "2020 Renault Megane", price: 70 },
      ],
      logo: "https://imgs.search.brave.com/tLyFMxuv8V_UrVICjrZAoeZt5emLmM5gq2UKFY4j8jQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNiLzgy/LzI2LzJiODIyNjk2/OTM3MmQ1ZjZlYmFl/YjhlZDUyMGIwZjhi/LmpwZw"
    },
    { 
      name: "Saber Rent Car",
      location: "Hammamet",
      cars: [
        { model: "2021 Renault Clio", price: 55 },
        { model: "2020 Ford Focus", price: 60 },
      ],
      logo: "https://imgs.search.brave.com/U0v51MF3Etp18C6Pf72Y7HVrSrtvwCyoeHDS2hJ0eYc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzI1LzQyLzI3/LzM2MF9GXzYyNTQy/MjcyNl9kMkp5Q0ly/S01LVUdFc3pSbXJG/Q2x3VkdISm9pMG5i/Qy5qcGc"
    },
    { 
      name: "City Car Rental",
      location: "Tunis",
      cars: [
        { model: "2023 Ford Focus", price: 80 },
        { model: "2021 Peugeot 208", price: 70 },
        
      ],
      logo: "https://imgs.search.brave.com/G6X4ntKwBHQ8bJMb1_AUyf2Yc_gksyciBWYQTJw479Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzExLzg3LzI3/LzM2MF9GXzYxMTg3/Mjc0NF9BdUF4Y0pT/NUNNc0JneEd6dkht/MEVVZzJwcXhyUGY1/bS5qcGc"
    },
    { 
      name: "My Car",
      location: "Sousse",
      cars: [
        { model: "2022 Citroen C3", price: 65 },
        { model: "2020 Volkswagen Golf", price: 60 },
        
      ],
      logo: "https://imgs.search.brave.com/XZvv4Hhk-lBMhblicpImZuA6C9rcAgaIHh-wXSlm2x4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzU2Lzk0Lzc0/LzM2MF9GXzI1Njk0/NzQ0OF9wU2lhRVBK/MUpoeHFxOGpjQzV2/NTVybzh0dFFpUjVl/Ny5qcGc"
    },
    { 
      name: "Avis Tunisia",
      location: "Hammamet",
      cars: [
        { model: "2021 Seat Ibiza", price: 70 },
        { model: "2020 Volkswagen Polo", price: 65 },
        
      ],
      logo: "https://imgs.search.brave.com/aJENIoeNdZ66vxjlBLucqBlanxPPrFizeY2uGf5ELV8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9XVDYyUF84WHB3/T3c4VXpJb1FJZkdx/OXFLSW89LzB4MDox/MDczeDEwNzMvZml0/LWluLzUwMHg1MDAv/OTlkZXNpZ25zLWNv/bnRlc3RzLWF0dGFj/aG1lbnRzLzgwLzgw/NjAzL2F0dGFjaG1l/bnRfODA2MDM5OTU"
    },
    { 
      name: "Ezzahra Car",
      location: "Ezzahra",
      cars: [
        { model: "2021 Volkswagen Golf", price: 60 },
        { model: "2020 Renault Clio", price: 55 },
      
      ],
      logo: "https://imgs.search.brave.com/iBfSUTNFU4sMwuWn6XP1OyF5kc3ItoSd6wxH3FYM-LE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE1Lzg5/LzJkLzE1ODkyZDU0/YmUwMzE0YjJmODYw/YmU5YjgxMzI5ZWFk/LmpwZw"
    },
    { 
      name: "Moncef Rent",
      location: "Hammamet",
      cars: [
        { model: "2022 Nissan Micra", price: 55 },
        { model: "2021 Renault Clio", price: 60 },
        
      ],
      logo: "https://imgs.search.brave.com/tLyFMxuv8V_UrVICjrZAoeZt5emLmM5gq2UKFY4j8jQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNiLzgy/LzI2LzJiODIyNjk2/OTM3MmQ1ZjZlYmFl/YjhlZDUyMGIwZjhi/LmpwZw"
    },
  ];
  

  return (
    <div className="driver-container">
      {carRentalCompanies.map((company, index) => (
        <CarRentalCard key={index} company={company} />
      ))}
    </div>
  );
};

export default CarRental;