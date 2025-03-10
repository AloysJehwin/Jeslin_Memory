import React from "react";
import { Routes, Route } from "react-router-dom";
import MemoryGallery from "./components/MemoryGallery";
import CollectionPage from "./components/CollectionPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MemoryGallery />} />
      <Route path="/collection/:id" element={<CollectionPage />} />
    </Routes>
  );
};

export default App;
