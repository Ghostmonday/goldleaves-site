import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";

function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppShell>
              <Landing />
            </AppShell>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;