import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/NavBar/MainNavbar";
import HomeView from "./routes/homeView";
import MintView from "./routes/mintView";
import GalleryView from "./routes/galleryView";
import RoadmapView from "./routes/roadmapView";
import TeamView from "./routes/teamView";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="mint" element={<MintView />} />
        <Route path="gallery" element={<GalleryView />} />
        <Route path="roadmap" element={<RoadmapView />} />
        <Route path="team" element={<TeamView />} />
      </Routes>
    </>
  );
}

export default App;
