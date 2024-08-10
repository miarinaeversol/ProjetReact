import {BrowserRouter, Routes, Route} from "react-router-dom";
import JuryList from "./components/JuryList.js";
import AddJury from "./components/AddJury.js";
import EditJury from "./components/EditJury.js";

import ExamenList from "./components/ExamenList.js";
import AddExamen from "./components/AddExamen.js";
import EditExamen from "./components/EditExamen.js";

import TravailleList from "./components/TravailleList.js";
import AddTravaille from "./components/AddTravaille.js";
import EditTravaille from "./components/EditTravaille.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JuryList/>}/>
        <Route path="add" element={<AddJury/>}/>
        <Route path="edit/:id" element={<EditJury/>}/>

        <Route path="exam" element={<ExamenList/>}/>
        <Route path="/addexam" element={<AddExamen/>}/>
        <Route path="/editexam/:id" element={<EditExamen/>}/>

        <Route path="trav" element={<TravailleList/>}/>
        <Route path="/addtrav" element={<AddTravaille/>}/>
        <Route path="/edittrav/:id" element={<EditTravaille/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
