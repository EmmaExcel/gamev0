import "./App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Game from "./Pages/Game";
import Books from "./Pages/Books";
import Movies from "./Pages/Movies";
import Sidebar from "./Components/Sidebar";
import SingleGame from "./Pages/SingleGame";
function App() {
  return (
    <>
      <Navbar />
      <Sidebar/>
      <Routes>
        <Route path="/" exact element={<Game />} />
        <Route path="/books" element={<Books />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/singlegame/:id" element={<SingleGame />} />
      </Routes>
    </>
  );
}

export default App;
