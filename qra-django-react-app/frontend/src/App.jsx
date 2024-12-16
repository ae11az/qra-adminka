import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ClientForm from "./pages/ClientForm";
import TariffsList from "./pages/TariffsList";
import TariffForm from "./pages/TariffForm";
import ClientDetails from "./pages/ClientDetails";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/clientform" element={<ClientForm />} />
        <Route path="/clients/:id" element={<ClientDetails />} />
        <Route path="/tariffslist" element={<TariffsList />} />
        <Route path="/tariffform" element={<TariffForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App