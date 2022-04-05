import { useState } from 'react';

export const useStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    const item = window.sessionStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value: any) => {
    setStoredValue(value);

    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  };

  const clearStorage = () => {
    sessionStorage.clear();
  };

  return [storedValue, setValue, clearStorage];
};
