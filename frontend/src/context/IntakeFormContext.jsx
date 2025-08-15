import React, { createContext, useContext, useState, useCallback } from "react";

const IntakeFormContext = createContext({ open: false, openForm: () => {}, closeForm: () => {}, toggleForm: () => {} });

export function IntakeFormProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openForm = useCallback(() => setOpen(true), []);
  const closeForm = useCallback(() => setOpen(false), []);
  const toggleForm = useCallback(() => setOpen((o) => !o), []);

  return (
    <IntakeFormContext.Provider value={{ open, openForm, closeForm, toggleForm }}>
      {children}
    </IntakeFormContext.Provider>
  );
}

export function useIntakeForm() {
  return useContext(IntakeFormContext);
}