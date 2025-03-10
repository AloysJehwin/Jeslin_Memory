import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const collections = {
  1: [
    { id: 101, src: "/images/beach1.jpg" },
    { id: 102, src: "/images/beach2.jpg" },
    { id: 103, src: "/images/beach3.jpg" },
  ],
  2: [
    { id: 201, src: "/images/mountain1.jpg" },
    { id: 202, src: "/images/mountain2.jpg" },
    { id: 203, src: "/images/mountain3.jpg" },
  ],
  3: [
    { id: 301, src: "/images/city1.jpg" },
    { id: 302, src: "/images/city2.jpg" },
    { id: 303, src: "/images/city3.jpg" },
  ],
  4: [
    { id: 401, src: "/images/forest1.jpg" },
    { id: 402, src: "/images/forest2.jpg" },
    { id: 403, src: "/images/forest3.jpg" },
  ],
  5: [
    { id: 501, src: "/images/sunset1.jpg" },
    { id: 502, src: "/images/sunset2.jpg" },
    { id: 503, src: "/images/sunset3.jpg" },
  ],
};

const CollectionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const images = collections[id] || [];

  return (
    <div className="collection-page">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Photo Collection
      </motion.h2>
      
      <button className="back-button" onClick={() => navigate("/")}>
        Back to Gallery
      </button>

      <div className="photo-grid">
        {images.map((photo) => (
          <motion.img
            key={photo.id}
            src={photo.src}
            alt="Collection Photo"
            className="collection-photo"
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
