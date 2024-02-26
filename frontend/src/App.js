import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Student from "./Student";
import CreateStudent from "./CreateStudent";
import UpdateStudent from "./UpdateStudent";

// import "bootstrap/dist/js/bootstrap";
// import "bootstrap/dist/src/collapse";
// import "bootstrap/dist/src/dropdown";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
