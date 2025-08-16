import React, { createContext, useCallback, useContext, useState } from "react";

const PricingContext = createContext({ open: false, openPricing: () => {}, closePricing: () => {}, togglePricing: () => {} });

export function PricingProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openPricing = useCallback(() => setOpen(true), []);
  const closePricing = useCallback(() => setOpen(false), []);
  const togglePricing = useCallback(() => setOpen((o) => !o), []);
  return (
    <PricingContext.Provider value={{ open, openPricing, closePricing, togglePricing }}>
      {children}
    </PricingContext.Provider>
  );
}

export function usePricing() {
  return useContext(PricingContext);
}