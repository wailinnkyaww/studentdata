import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StudentTable from "./studentTable";
import CreateStudent from "./createStudent";
import EditStudent from "./editStudent";
import ViewDetails from "./viewStudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentTable />}></Route>
        <Route path="/student/create" element={<CreateStudent />}></Route>
        <Route
          path="/student/edit/:studentid"
          element={<EditStudent />}
        ></Route>
        <Route
          path="/student/view/:studentid"
          element={<ViewDetails />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
