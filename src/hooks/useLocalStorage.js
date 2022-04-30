import { useState } from "react";
export function useLocalStorage(key, value) {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : value;
    } catch (error) {
      return value;
    }
  });
  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoreValue(value);
    } catch (error) {
      console.log(error);
    }
  };
  return [storeValue, setLocalStorage];
}
