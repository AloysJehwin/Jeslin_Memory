import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  { id: 1, src: "/images/pic1.jpg", title: "Beach" },
  { id: 2, src: "/images/pic2.jpg", title: "Mountain" },
  { id: 3, src: "/images/pic3.jpg", title: "City" },
  { id: 4, src: "/images/pic4.jpg", title: "Forest" }
];

const MemoryGallery = () => {
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  // Images for Transition Effect
  const coverImages = [
    { src: "/images/pic2.jpg", delay: 0.2, height: "33.3vh" },
    { src: "/images/pic3.jpg", delay: 0.6, height: "33.3vh" },
    { src: "/images/pic4.jpg", delay: 1.0, height: "33.4vh" }
  ];

  // Handle Photo Click
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setLoading(true);

    // Navigate after animation completes
    setTimeout(() => {
      navigate(`/collection/${photo.id}`);
    }, 2000); // Adjusted to match animation duration
  };

  return (
    <div className="gallery">
      <h1>Memory Gallery</h1>

      {/* Main Group Photo */}
      <motion.img
        src="/images/pic5.jpg"
        alt="Group Photo"
        className="main-photo"
        whileHover={{ scale: 1.05 }}
      />

      {/* Photo Slider */}
      <div className="photo-slider">
        <div className="slider-track">
          {photos.map((photo) => (
            <motion.img
              key={photo.id}
              src={photo.src}
              alt={photo.title}
              className="thumbnail"
              whileHover={{ scale: 1.1 }}
              onClick={() => handlePhotoClick(photo)}
            />
          ))}
        </div>
      </div>

      {/* Staggered Transition Effect */}
      <AnimatePresence>
        {loading && (
          <div className="cover-animation">
            {coverImages.map((img, index) => (
              <motion.div
                key={index}
                className="cover-photo"
                style={{
                  backgroundImage: `url(${img.src})`,
                  height: img.height,
                  top: `${index * 33.3}vh` // Correctly positioning each image
                }}
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: img.delay, // Staggered delay
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MemoryGallery;
