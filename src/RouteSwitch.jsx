import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Game from "./Game";
import Leaderboard from "./Leaderboard";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;