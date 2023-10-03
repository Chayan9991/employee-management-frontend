import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div className="w-screen min-h-screen bg-slate-900">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
