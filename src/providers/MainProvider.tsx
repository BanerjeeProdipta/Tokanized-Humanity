/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext } from 'react';

interface ITheme {

}

export const MainContext = createContext<ITheme>({
  themeData: []
});

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'light';
};

export function MainProvider({ children }: JSX.ElementChildrenAttribute) {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (themeValue: string) => {
    const root = window.document.documentElement;
    const isDark = themeValue === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(themeValue);

    localStorage.setItem('theme', themeValue);
  };

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <MainContext.Provider value={{
      themeData: [theme, setTheme],
    }}
    >
      {children}
    </MainContext.Provider>
  );
}
