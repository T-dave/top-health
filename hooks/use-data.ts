import { useContext } from "react";
import DataContext from "@/constants/data-context/data-context";

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a ThemeProvider');
  }
  return context;
};
