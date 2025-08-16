import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { IntakeFormProvider } from "./context/IntakeFormContext";
import { Toaster } from "./components/ui/toaster";
import ThemeProvider from "./context/ThemeProvider";
import { PricingProvider } from "./context/PricingContext";
import CopyrightBadge from "./components/CopyrightBadge";

function AppShell({ children }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-[hsl(var(--background))] dark:text-[hsl(var(--foreground))]">
        <Header />
        {children}
        <Footer />
        <Toaster />
        <CopyrightBadge />
      </div>
    </ThemeProvider>
  );
}

function App() {
  return (
    <IntakeFormProvider>
      <PricingProvider>
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
      </PricingProvider>
    </IntakeFormProvider>
  );
}

export default App;