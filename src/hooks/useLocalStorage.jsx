import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      if (value != null) {
        return JSON.parse(value);
      } else if (!value && key != null && initialValue != null) {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
    } catch (error) {
      console.error("Error retrieving value from localStorage:", error);
      return initialValue;
    }
  });

  const setValue = (newValue) => {
    try {
      if (key != null) {
        window.localStorage.setItem(key, JSON.stringify(newValue));
      }
    } catch (error) {
      console.error("Error setting value to localStorage:", error);
    }
    setStoredValue(newValue);
  };

  useEffect(() => {
    try {
      if (key !== null) {
        const value = window.localStorage.getItem(key);
        setStoredValue(value !== null ? JSON.parse(value) : null);
      }
    } catch (error) {
      console.error("Error retrieving value from localStorage:", error);
      setStoredValue(initialValue);
    }
  }, [key, initialValue]);

  return [storedValue, setValue];
};
