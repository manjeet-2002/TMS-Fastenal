import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Error from "./Components/Error";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import Dashboard from "./Components/DashboardUI/Dashboard";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard isAdmin={0} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
