import { Route, Routes } from "react-router-dom";
import Addevents from "./Pages/AddEvents";
import ShowEvents from "./Pages/ShowEvents";
import Navbar from "./navbar";
import Update from "./Pages/Update";

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/add" element={<Addevents />}></Route>
        <Route path="/show" element={<ShowEvents />}></Route>
        <Route path="/show/:eventID" element={<Update />}></Route>
      </Routes>

    </div>
  );
}

export default App;
