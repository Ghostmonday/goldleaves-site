import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { IntakeFormProvider } from "./context/IntakeFormContext";
import { Toaster } from "./components/ui/toaster";

function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      {children}
      <Footer />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <IntakeFormProvider>
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
    </IntakeFormProvider>
  );
}

export default App;