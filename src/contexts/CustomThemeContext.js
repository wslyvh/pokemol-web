import React, { useContext, useCallback, useMemo, useEffect } from 'react';

import { setTheme } from '../themes/theme';

const CustomThemeContext = React.createContext();

function useCustomThemeContext() {
  return useContext(CustomThemeContext);
}

const initialState = {
  theme: setTheme(),
  sideNavOpen: localStorage.getItem('sideNavOpen') === 'true' || false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setTheme': {
      return { ...state, theme: setTheme(action.payload) };
    }
    case 'toggleSideNav': {
      return { ...state, sideNavOpen: action.payload };
    }
    default: {
      return initialState;
    }
  }
};

function CustomThemeContextProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const updateTheme = useCallback((theme) => {
    dispatch({ type: 'setTheme', payload: theme });
  }, []);

  const updateSideNavOpen = useCallback((data) => {
    dispatch({ type: 'toggleSideNav', payload: data });
  }, []);

  useEffect(() => {
    updateSideNavOpen(localStorage.getItem('sideNavOpen') === 'true');

    // eslint-disable-next-line
  }, []);

  return (
    <CustomThemeContext.Provider
      value={useMemo(
        () => [
          state,
          {
            updateTheme,
            updateSideNavOpen,
          },
        ],
        [state, updateTheme, updateSideNavOpen],
      )}
    >
      {props.children}
    </CustomThemeContext.Provider>
  );
}

export function useTheme() {
  const [state, { updateTheme }] = useCustomThemeContext();
  return [state.theme, updateTheme];
}

export function useSideNavToggle() {
  const [state, { updateSideNavOpen }] = useCustomThemeContext();

  function toggleSideNav() {
    localStorage.setItem('sideNavOpen', `${!state.sideNavOpen}`);
    updateSideNavOpen(!state.sideNavOpen);
  }
  return [state.sideNavOpen, toggleSideNav];
}

const CustomThemeContextConsumer = CustomThemeContext.Consumer;

export {
  CustomThemeContext,
  CustomThemeContextProvider,
  CustomThemeContextConsumer,
};