import { useState } from 'react';

export const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value: any) => {
    setStoredValue(value);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  return [storedValue, setValue];
};
